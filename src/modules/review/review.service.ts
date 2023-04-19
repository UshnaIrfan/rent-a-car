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
import paginationInterface from "./interfaces/pagination.interface";
import createClicksTypesInterface from "./interfaces/create-click-types.dto";
import { clicksTitle } from "./schemas/create-clicks-titles.schema";
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from "../auth/constants/constants";
import {UsersRepository} from "../users/users.repository";
import { Cache } from 'cache-manager';
import updateReviewInterface from "./interfaces/update-review.interface";
import {seller} from "../sellers/schemas/seller.schema";
import likeDislikeInterface from "./interfaces/like-dislike.interface";
import { likeDislikeReviewDto } from "./dto/like-dislike-review.dto";
import {likeDislikeRepository} from "./respositories/like-dislike.repository";


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

    ){}


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
        async getReviewsWithCounts(sellerId: string):Promise<{ seller: seller, result: { titleId: string, count: number }[] }>
        {
           const seller = await this.sellerRepository.getSellerById(sellerId);
           if (!seller)
           {
              throw new NotFoundException(`Seller not exist`);
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

        const result = titles.map((titleId) => ({ titleId, count: counts[titleId]}));
        return { seller, result };
   }





       // loved/air  review
      //uncomment for testing
  //     async getReviewsWithTypes(sellerId: string, page: number = 1)
  //     {
  //         const toAir = [];
  //         const toLove = [];
  //
  //         const seller = await this.reviewRepository.reviewBySellerId(sellerId);
  //         if (!seller)
  //         {
  //           throw new NotFoundException(`Seller not exist`);
  //         }
  //
  //         const allReviews = await this.reviewRepository.reviewBySellerIdALL(sellerId);
  //
  //         var toAirCount = 0;
  //         var toLoveCount = 0;
  //
  //       for (const review of allReviews)
  //       {
  //           const title = await this.clicksTitleRepository.findByTitle(review.titleId);
  //           if (!title)
  //           {
  //              throw new NotFoundException(`Title not exist`);
  //           }
  //          const matchingSlugTitle = await this.clicksTitleRepository.findBySlug(review.titleSlug);
  //          if (!matchingSlugTitle)
  //          {
  //             throw new NotFoundException(`Title not found with slug: ${review.titleSlug}`);
  //         }
  //
  //       if (title.type === matchingSlugTitle.type)
  //       {
  //           if (title.slug === matchingSlugTitle.slug)
  //           {
  //              if (title.type === 'to-air')
  //              {
  //                 if (review.message !== null)
  //                 {
  //                   toAir.push(review);
  //                   toAirCount++;
  //                 }
  //             }
  //             else if (title.type === 'to-love')
  //             {
  //                if (review.message !== null)
  //                {
  //                  toLove.push(review);
  //                  toLoveCount++;
  //               }
  //            }
  //         }
  //       else
  //       {
  //         if (title.type === 'to-air')
  //         {
  //           if (review.message !== null)
  //           {
  //             toAir.push(review);
  //             toAirCount++;
  //           }
  //         }
  //         else if (title.type === 'to-love')
  //         {
  //           if (review.message !== null)
  //           {
  //             toLove.push(review);
  //             toLoveCount++;
  //           }
  //         }
  //       }
  //     }
  //   }
  //
  //      const limit = 3;
  //      const offset = (page - 1) * limit;
  //      const paginatedToAirReviews = toAir.slice(offset, offset + limit);
  //      const paginatedToLoveReviews = toLove.slice(offset, offset + limit);
  //
  //     const totalToAirRecords = toAirCount;
  //     const totalToLoveRecords = toLoveCount;
  //     const totalToAirPages = Math.ceil(toAirCount / limit);
  //     const totalToLovePages = Math.ceil(toLoveCount / limit);
  //
  //   return {
  //     toAir: {
  //        data: paginatedToAirReviews,
  //        totalRecords: totalToAirRecords,
  //        totalPages: totalToAirPages,
  //        currentPage: page
  //     },
  //     toLove: {
  //        data: paginatedToLoveReviews,
  //        totalRecords: totalToLoveRecords,
  //        totalPages: totalToLovePages,
  //        currentPage: page
  //     }
  //   };
  // }
  //
  //


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
         const likedislike = {
           ...likeDislikeInterface,
           userId: decoded.id,

         };
          return  await this.likeDislikeRepository.createLikeDislike(likedislike);
       }





        //love/air  reviews
  //      async getReviewsWithTypes(sellerId: string, page: number = 1)
  //      {
  //        const toAir = [];
  //        const toLove = [];
  //        const seller = await this.reviewRepository.reviewBySellerId(sellerId);
  //        if (!seller)
  //        {
  //            throw new NotFoundException(`Seller not exist`);
  //        }
  //
  //       const allReviews = await this.reviewRepository.reviewBySellerIdALL(sellerId);
  //       var toAirCount = 0;
  //       var toLoveCount = 0;
  //       for (const review of allReviews)
  //       {
  //
  //        const result = await this.likeDislikeRepository.getAllReviewsCountByReviewId(review.id);
  //        const userCount = result.length;
  //
  //        const title = await this.clicksTitleRepository.findByTitle(review.titleId);
  //        if (!title)
  //        {
  //           throw new NotFoundException(`Title not exist`);
  //        }
  //
  //
  //       const matchingSlugTitle = await this.clicksTitleRepository.findBySlug(review.titleSlug);
  //       if (!matchingSlugTitle)
  //       {
  //          throw new NotFoundException(`Title not found with slug: ${review.titleSlug}`);
  //       }
  //
  //
  //       if (title.type === matchingSlugTitle.type)
  //       {
  //         if (title.slug === matchingSlugTitle.slug)
  //         {
  //            if (title.type === 'to-air')
  //            {
  //              if (review.message !== null)
  //              {
  //                 toAir.push({ ...review, Helpful:userCount});
  //                 toAirCount++;
  //              }
  //           }
  //           else if (title.type === 'to-love')
  //           {
  //              if (review.message !== null )
  //              {
  //                toLove.push({ ...review, Best_Awards:userCount});
  //                toLoveCount++;
  //              }
  //           }
  //        }
  //       else
  //       {
  //         if (title.type === 'to-air')
  //         {
  //           if (review.message !== null )
  //           {
  //             toAir.push({ ...review, Helpful:userCount});
  //             toAirCount++;
  //           }
  //         }
  //         else if (title.type === 'to-love')
  //         {
  //           if (review.message !== null)
  //           {
  //             toLove.push({ ...review, Best_Awards:userCount});
  //             toLoveCount++;
  //           }
  //         }
  //       }
  //     }
  //   }
  //
  //    const limit = 3;
  //    const offset = (page - 1) * limit;
  //    const paginatedToAirReviews = toAir.slice(offset, offset + limit);
  //    const paginatedToLoveReviews = toLove.slice(offset, offset + limit);
  //
  //    const totalToAirRecords = toAir.length;
  //    const totalToLoveRecords = toLove.length;
  //    const totalToAirPages = Math.ceil(toAir.length / limit);
  //    const totalToLovePages = Math.ceil(toLove.length / limit);
  //
  //   return {
  //     toAir: {
  //       data: paginatedToAirReviews.map((review) => {
  //         return {
  //           ...review,
  //
  //         };
  //       }),
  //       totalRecords: totalToAirRecords,
  //       totalPages: totalToAirPages,
  //       currentPage: page,
  //     },
  //     toLove: {
  //       data: paginatedToLoveReviews.map((review) => {
  //         return {
  //           ...review,
  //
  //         };
  //       }),
  //       totalRecords: totalToLoveRecords,
  //       totalPages: totalToLovePages,
  //       currentPage: page,
  //     },
  //   };
  // }

        async getReviewsWithTypes(sellerId: string, page: number = 1)
        {
            const toAir = [];
            const toLove = [];
            const seller = await this.reviewRepository.reviewBySellerId(sellerId);
            if (!seller)
            {
                throw new NotFoundException(`Seller not exist`);
            }

           const allReviews = await this.reviewRepository.reviewBySellerIdALL(sellerId);
           var toAirCount = 0;
           var toLoveCount = 0;
           for (const review of allReviews)
           {

              const result = await this.likeDislikeRepository.getAllReviewsCountByReviewId(review.id);
              const userCount = result.length;

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
                    toAir.push({ ...review, Helpful:userCount});
                    toAirCount++;
                 }
              }
             else if (title.type === 'to-love')
             {
                 if (review.message && review.message.trim() !== '' )
                 {
                    toLove.push({ ...review, Best_Awards:userCount});
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
                   toAir.push({ ...review, Helpful:userCount});
                   toAirCount++;
               }
            }
            else if (title.type === 'to-love')
            {
               if ( review.message && review.message.trim() !== '')
               {
                  toLove.push({ ...review, Best_Awards:userCount});
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



}
