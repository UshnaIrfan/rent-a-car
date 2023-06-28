import {
  BadRequestException, CACHE_MANAGER,
  ConflictException, Inject,
  Injectable,
  NotFoundException, UnauthorizedException
} from "@nestjs/common";
import submitReviewInterface from "./interfaces/submit-review.interface";
import {reviewRepository} from "./respositories/review.respository";
import createClicksTitlesInterface from "./interfaces/create-clicks-titles.interface";
import {sellerRepository} from "../sellers/seller.repository";
import {clicksTypes} from "./schemas/create-click-types.schema";
import { review } from "./schemas/submit-review.schema";
import {clicksTypesRepository} from "./respositories/clicksTypes.repository";
import {clicksTitlesRepository} from "./respositories/clicksTitles.repository";
import createClicksTypesInterface from "./interfaces/create-click-types.dto";
import { clicksTitle } from "./schemas/create-clicks-titles.schema";
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from "../auth/constants/constants";
import {UsersRepository} from "../users/users.repository";
import { Cache } from 'cache-manager';
import updateReviewInterface from "./interfaces/update-review.interface";
import {seller} from "../sellers/schemas/seller.schema";
import likeDislikeInterface from "./interfaces/like-dislike.interface";
import {likeDislikeRepository} from "./respositories/like-dislike.repository";
import adminUpdateSubmitReviewInterface from "./interfaces/admin-update-submit-review.interface";
import adminUpdateBestwriterReviewInterface from "./interfaces/admin-update-bestwriter-review.interface";
import {MailerService} from "@nestjs-modules/mailer";
import handlebars from "handlebars";
import * as fs from 'fs';

@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository:reviewRepository,
    private readonly sellerRepository:sellerRepository,
    private readonly clicksTypeRepository:clicksTypesRepository,
    private readonly clicksTitleRepository:clicksTitlesRepository,
    private readonly usersRepository:UsersRepository,
    private jwtService: JwtService,
    private readonly likeDislikeRepository:likeDislikeRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly mailerService: MailerService
    ){}



       //FRONTEND APIS
       // create click types
       async createClicksTypes(clickReviewInterface:createClicksTypesInterface):Promise<clicksTypes>
       {
           const click = await this.clicksTypeRepository.findByType(clickReviewInterface.type);
           if (click)
           {
              throw new ConflictException('already exist');
           }

           try
           {
              return this.clicksTypeRepository.createClicks(clickReviewInterface);
           }
           catch (error)
           {
              throw new BadRequestException('Failed to create clicks review');
           }
       }




        //  create click titles
        async createClicksTitles(reqBody:createClicksTitlesInterface): Promise<{record:clicksTitle}>
        {

            const existingClickSlug = await this.clicksTitleRepository.findBySlug(reqBody.slug);
            if (existingClickSlug)
            {
               throw new ConflictException('Slug already exist');
            }

            const existingClickTitle = await this.clicksTypeRepository.findByType(reqBody.type);
            if (!existingClickTitle)
            {
               throw new NotFoundException('type not found');
            }


           const existingClickTypes = await this.clicksTitleRepository.findByTitle(reqBody.title);
           if (existingClickTypes)
           {
              throw new ConflictException('Balloon title already exist');
           }

           const clicked = await this.clicksTitleRepository.createClicksTypes(reqBody);
           return { record: clicked };
       }




          //all review title with types
         async  getAllTitle( ):Promise<{title: clicksTypes[]}>
         {
             const typeResult = await this.clicksTitleRepository.getAllReviewsTitle()
             if(!typeResult)
             {
                 throw new  NotFoundException('Balloon not exist');
             }
                return { title: typeResult};
         }





        // submit review
        async submitReview(createReviewInterface:submitReviewInterface,accessToken: string): Promise<review>
        {
            const decoded = await this.jwtService.verify(accessToken, { secret:jwtConstants.secret, });
            const user = await this.usersRepository.findUserByID(decoded.id)
            if(!user)
            {
               throw new  NotFoundException('invalid user')
            }

            const cachedToken = await this.cacheManager.get(accessToken);
            if (!cachedToken)
            {
               throw new UnauthorizedException('Token expired');
            }

           const seller=  await this.sellerRepository.getSellerId(createReviewInterface.sellerId);
           if(!seller)
           {
              throw new  NotFoundException('seller not exist')
           }

           const title=  await this.clicksTitleRepository.findByTitle(createReviewInterface.titleId);
           if (!title)
           {
              throw new  NotFoundException('Balloon title not exist')
           }


          const previousReview = await this.reviewRepository.findReviewByUserAndSeller(decoded.id, createReviewInterface.sellerId);
          if (previousReview)
          {
              throw new ConflictException('You have already submitted a review for this seller');
          }


         const reviewData: submitReviewInterface & { userId: string, titleSlug: string } = {
            ...createReviewInterface,
             userId: decoded.id,
             titleSlug:title.slug
        };

          return this.reviewRepository.submitReview(reviewData);
  }



         // balloons count
         async getReviewsWithCounts(sellerId: string): Promise<{ seller: seller, result: { titleId: string, count: number }[] }>
         {
           // approved sellers record show
            const seller = await this.sellerRepository.getSellerId(sellerId);
            if (!seller)
            {
               throw new NotFoundException(`Seller not exit `);
            }

           const reviews = await this.reviewRepository.reviewBySellerIdALL(sellerId);
           const counts = {};

           for (const review of reviews)
           {
               const { titleId } = review;
               counts[titleId] = counts[titleId] ? counts[titleId] + 1 : 1;
           }

          const allTitles = await this.clicksTitleRepository.getAllReviewsTitle();
          const titles = Object.keys(counts);

          for (const title of allTitles)
          {
             const { id } = title;
             if (!counts[id])
             {
               titles.push(id);
               counts[id] = 0;
             }
         }

        const result = titles.map((titleId) => ({ titleId, count: counts[titleId] }));
        // Sort the result array in the same order as returned by getAllReviewsTitle
        const allReviewsTitle = await this.clicksTitleRepository.getAllReviewsTitle();
        result.sort((a, b) =>
        {
            const aIndex = allReviewsTitle.findIndex((title) => title.id === a.titleId);
            const bIndex = allReviewsTitle.findIndex((title) => title.id === b.titleId);
            return aIndex - bIndex;
        });

         return { seller, result };
    }




      //update review
       async  updateReview(updateReviewInterface:updateReviewInterface)
       {
            const updateReview = await this.reviewRepository.updateReview(updateReviewInterface.titleId , updateReviewInterface.message,updateReviewInterface.reviewId);
            return { message: "updated successfully" ,updateReview};
       }



       //like dislike submit review
       async createLikeDislike(likeDislikeInterface: likeDislikeInterface,accessToken:string)
       {
            const decoded = await this.jwtService.verify(accessToken, { secret:jwtConstants.secret, });
            const user = await this.usersRepository.findUserByID(decoded.id)
            if(!user)
            {
                throw new  NotFoundException('invalid user')
            }
            const cachedToken = await this.cacheManager.get(accessToken);
            if (!cachedToken)
            {
                throw new UnauthorizedException('Token expired');
            }

            const review = await this.reviewRepository.reviewById(likeDislikeInterface.reviewId);
            if (!review)
            {
               throw new NotFoundException('invalid review id');
            }


           const existingLikeDislike = await this.likeDislikeRepository.findLikeDislikeByUser(decoded.id);
           if (existingLikeDislike.length > 0)
           {
               const submittedReviewIds = existingLikeDislike.map(review => review.reviewId);
               if ( submittedReviewIds.includes(likeDislikeInterface.reviewId))
               {
                   throw new ConflictException('User already submitted a review for this review ID');
               }
           }

           const likedislike = {
               ...likeDislikeInterface,
               userId: decoded.id,
           };
            return  await this.likeDislikeRepository.createLikeDislike(likedislike);
       }





        //love/air  reviews
    //       async getReviewsWithTypes(sellerId: string, page: number = 1)
    //       {
    //
    //           const toAir = [];
    //           const toLove = [];
    //           const seller = await this.reviewRepository.reviewBySellerId(sellerId);
    //           if (!seller)
    //           {
    //               throw new NotFoundException(`Seller not exist`);
    //           }
    //
    //
    //          const allReviews = await this.reviewRepository.reviewBySellerIdALL(sellerId);
    //
    //          var toAirCount = 0;
    //          var toLoveCount = 0;
    //          for (const review of allReviews)
    //          {
    //
    //              const result = await this.reviewRepository.reviewId(review.id);
    //              console.log(result)
    //              const  res=JSON.stringify(result);
    //              const data = {
    //                 like: JSON.parse(res).likeDislike,
    //                 dislike: JSON.parse(res).likeDislike,
    //                 report: JSON.parse(res).likeDislike
    //            };
    //
    //            const counts = {
    //                like: data.like.filter(record => record.type === 'like').length,
    //                dislike: data.dislike.filter(record => record.type === 'dislike').length,
    //                report: data.like.filter(record => record.type === 'report').length,
    //            };
    //
    //
    //
    //            const title = await this.clicksTitleRepository.findByTitle(review.titleId);
    //            if (!title)
    //            {
    //                throw new NotFoundException(`Title not exist`);
    //            }
    //
    //
    //            const matchingSlugTitle = await this.clicksTitleRepository.findBySlug(review.titleSlug);
    //            if (!matchingSlugTitle)
    //            {
    //               throw new NotFoundException(`Title not found with slug: ${review.titleSlug}`);
    //            }
    //
    //
    //         if (title.type === matchingSlugTitle.type)
    //         {
    //            if (title.slug === matchingSlugTitle.slug)
    //            {
    //              if (title.type === 'to-air')
    //              {
    //                 if ( review.message && review.message.trim() !== '')
    //                 {
    //                   toAir.push({ ...review,result:counts});
    //                   toAirCount++;
    //                 }
    //              }
    //             else if (title.type === 'to-love')
    //             {
    //                if (review.message && review.message.trim() !== '' )
    //                {
    //                   toLove.push({ ...review,result:counts});
    //                   toLoveCount++;
    //                }
    //            }
    //         }
    //        else
    //        {
    //            if (title.type === 'to-air')
    //            {
    //               if (review.message && review.message.trim() !== '' )
    //               {
    //                  toAir.push({ ...review,result:counts});
    //                  toAirCount++;
    //              }
    //           }
    //           else if (title.type === 'to-love')
    //           {
    //              if ( review.message && review.message.trim() !== '')
    //              {
    //                 toLove.push({ ...review,result:counts});
    //                 toLoveCount++;
    //              }
    //          }
    //       }
    //     }
    //   }
    //
    //
    //     const limit = 3;
    //     const offset = (page - 1) * limit;
    //     const paginatedToAirReviews = toAir.slice(offset, offset + limit);
    //     const paginatedToLoveReviews = toLove.slice(offset, offset + limit);
    //
    //     const totalToAirRecords = toAir.length;
    //     const totalToLoveRecords = toLove.length;
    //     const totalToAirPages = Math.ceil(toAir.length / limit);
    //     const totalToLovePages = Math.ceil(toLove.length / limit);
    //
    //     return {
    //       toAir: {
    //         data: paginatedToAirReviews.map((review) => {
    //           return {
    //              ...review,
    //
    //           };
    //        }),
    //        totalRecords: totalToAirRecords,
    //        totalPages: totalToAirPages,
    //        currentPage: page,
    //      },
    //      toLove: {
    //         data: paginatedToLoveReviews.map((review) => {
    //          return {
    //             ...review,
    //
    //          };
    //        }),
    //        totalRecords: totalToLoveRecords,
    //        totalPages: totalToLovePages,
    //        currentPage: page,
    //     },
    //   };
    // }

       //updated    ( love /air review)
        async getReviewsWithTypes(sellerId: string, tittleId : string,  page: number = 1)
        {
            const toAir = [];
            const toLove = [];
            const seller = await this.reviewRepository.reviewBySellerId(sellerId);
            if (!seller)
            {
                throw new NotFoundException(`Seller not exist`);
            }
            console.log(tittleId)

           const allReviews = await this.reviewRepository.reviewBySellerIdAndTittle(sellerId,tittleId);
           console.log(allReviews)
           var toAirCount = 0;
           var toLoveCount = 0;
           for (const review of allReviews)
           {
               const result = await this.reviewRepository.reviewId(review.id);
               const  res=JSON.stringify(result);
               const data = {
                  like: JSON.parse(res).likeDislike,
                  dislike: JSON.parse(res).likeDislike,
                  report: JSON.parse(res).likeDislike
             };

             const counts = {
                 like: data.like.filter(record => record.type === 'like').length,
                 dislike: data.dislike.filter(record => record.type === 'dislike').length,
                 report: data.like.filter(record => record.type === 'report').length,
             };


             const title = await this.clicksTitleRepository.findByTitle(review.titleId);
             if (!title)
             {
                 throw new NotFoundException(`Title not exist`);
             }


             const matchingSlugTitle = await this.clicksTitleRepository.findBySlug(review.titleSlug);
             if (!matchingSlugTitle)
             {
                throw new NotFoundException(`Title not found with slug: ${review.titleSlug}`);
             }


            if (title.type === matchingSlugTitle.type)
            {
               if (title.slug === matchingSlugTitle.slug)
               {
                 if (title.type === 'to-air')
                 {
                    if ( review.message && review.message.trim() !== '')
                    {
                      toAir.push({ ...review,result:counts});
                      toAirCount++;
                    }
                 }
                else if (title.type === 'to-love')
                {
                   if (review.message && review.message.trim() !== '' )
                   {
                      toLove.push({ ...review,result:counts});
                      toLoveCount++;
                   }
               }
            }
           else
           {
               if (title.type === 'to-air')
               {
                  if (review.message && review.message.trim() !== '' )
                  {
                     toAir.push({ ...review,result:counts});
                     toAirCount++;
                 }
              }
              else if (title.type === 'to-love')
              {
                 if ( review.message && review.message.trim() !== '')
                 {
                    toLove.push({ ...review,result:counts});
                    toLoveCount++;
                 }
             }
          }
        }
      }


        const limit = 3;
        const offset = (page - 1) * limit;
        const paginatedToAirReviews = toAir.slice(offset, offset + limit);
        const paginatedToLoveReviews = toLove.slice(offset, offset + limit);

        const totalToAirRecords = toAir.length;
        const totalToLoveRecords = toLove.length;
        const totalToAirPages = Math.ceil(toAir.length / limit);
        const totalToLovePages = Math.ceil(toLove.length / limit);

        return {
          toAir: {
            data: paginatedToAirReviews.map((review) => {
              return {
                 ...review,

              };
           }),
           totalRecords: totalToAirRecords,
           totalPages: totalToAirPages,
           currentPage: page,
         },
         toLove: {
            data: paginatedToLoveReviews.map((review) => {
             return {
                ...review,

             };
           }),
           totalRecords: totalToLoveRecords,
           totalPages: totalToLovePages,
           currentPage: page,
        },
      };
  }





       //ADMIN APIS
       // review search
       async search(pageNumber: number,pageSize?:number, sellerId?: string ,userId?:string,message?:string,type?:string,categoryId ?:string,orderType?:string,orderBy?:string,startDate?:string,endDate?:string)
       {

            const skip = (pageNumber - 1) * pageSize;
            const [result, totalCount] = await this.reviewRepository.search(skip,pageSize,sellerId,userId ,message,type,categoryId,orderType,orderBy,startDate,endDate);

            const totalPages = Math.ceil(totalCount / pageSize);
            if (result.length === 0)
            {
               throw new NotFoundException('No records found');
            }
            return {
                records:result,
                totalRecords: totalCount,
                totalPages,
                currentPage: pageNumber,
           };
      }





       // admin update  review status
       async adminUpdateReview(adminUpdateCategoryInterface:adminUpdateSubmitReviewInterface):Promise<{ updateAdmin: review; message: string }>
       {
            const updateAdmin = await this.reviewRepository.adminUpdateReview(adminUpdateCategoryInterface.reviewId,adminUpdateCategoryInterface.approvedByAdmin);
            if (!updateAdmin)
            {
                throw new NotFoundException('  review not exist');
            }
             return { message: "review  status updated successfully",updateAdmin };
       }




       // admin update best writer status
        async adminUpdateBestWriter(body:adminUpdateBestwriterReviewInterface):Promise<any>
        {
            const contact_us_url= process.env.CONTACT_US
            const privacy_policy_url= process.env.PRIVACY_POLICY
            const logo_l2a=process.env.LOGO_L2A
            const update = await this.reviewRepository.reviewById(body.reviewId);
            if (!update)
            {
               throw new NotFoundException('review not exist');
            }
            if(update.bestWriter==true)
            {
               return { message: 'Reward already given.' };
            }

            const updateAdmin = await this.reviewRepository.adminUpdateBestWriter(body.reviewId,body.bestWriter);
            if(updateAdmin)
            {

             let User = await this.usersRepository.findUserByID(updateAdmin.userId);
             if (!User)
             {
                throw new NotFoundException('user not exist');
             }
             try
             {
                 await this.bestRewardEmail(User.email,body.subject,body.emailBody);
                 const allUsers = await this.usersRepository.getAll();

                 for (const currentUser of allUsers)
                 {
                    if (currentUser.id !== User.id)
                    {
                      console.log(User)
                      this.bestRewardAnnouncementEmail(currentUser.email, currentUser.username,User.username,contact_us_url,privacy_policy_url,logo_l2a);
                    }
                 }
                 return { success: true, message: 'Emails sent successfully' };
             }
             catch (error)
             {
                 return { success: false, message: 'Failed to send emails' };
             }
          }
        }



        //sending email (best Reward)
        async  bestRewardEmail(email: string, subject: string,emailBody:string)
        {
              await this.mailerService.sendMail({
              to: email,
              subject: subject,
              html: emailBody,
            });
        }



       //best Reward Announcement Email
       async  bestRewardAnnouncementEmail(email: string, name: string,username:string,contact_us_url:string,privacy_policy_url:string,logo_l2a:string)
       {
            const template = handlebars.compile(fs.readFileSync('src/templates/bestAwardAnnouncement.html', 'utf8'));
            const html = template({ email, name: name,username:username,contact_us_url,privacy_policy_url,logo_l2a});
            return  this.mailerService.sendMail({
              to: email,
              subject: 'Best award Announcement!',
              html: html,
            });
      }

}
