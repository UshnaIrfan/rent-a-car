import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Between, In, IsNull, Like, Not, Repository } from "typeorm";
import {review} from "../schemas/submit-review.schema";
import {submitReviewDto} from "../dto/submit-review.dto";
import {clicksTitlesRepository} from "./clicksTitles.repository";
import {CategoryRepository} from "../../categories/category.repository";
import {likeDislikeRepository} from "./like-dislike.repository";


@Injectable()
export class reviewRepository{
  constructor(@InjectRepository(review) private reviewModel: Repository<review>,
              private  readonly  titleRepository:clicksTitlesRepository,
              private  readonly  categoryRepository:CategoryRepository,
              private  readonly  likeDislikeRepository:likeDislikeRepository
  ){}



       //submit review
       async submitReview(createReview:submitReviewDto):Promise<review| null>
       {
            return this.reviewModel.save(createReview);
       }





       // get  reviews (pagination)
       async findAndCount(skip: number, take: number): Promise<[review[], number]>
       {
         const [result, totalCount] = await this.reviewModel.findAndCount({
          skip,
          take,
          });
         return [result, totalCount];
       }




       async reviewBySellerIdALL(sellerId:string):Promise<review[]| null>
       {
          return this.reviewModel.find({
          where: { sellerId  ,approvedByAdmin: true},
         });
       }





        async reviewId(reviewId: string): Promise<review | undefined>
        {
            const result = await this.reviewModel.findOne({
            where: { id:reviewId },
            relations: ['likeDislike'],
            });
            return result;
       }





       //search by seller id
        async reviewBySellerId(sellerId:string):Promise<review| null>
        {
          return this.reviewModel.findOne({ where: { sellerId }});
        }



       //search by user id
       async reviewByUserId(userId:string):Promise<review| null>
       {
         return this.reviewModel.findOne({ where: { userId}});
       }




       //update review
        async updateReview(titleId: string, message: string,  id: string): Promise<review | null>
        {
           const review = await this.reviewModel.findOne({ where: { id } });
           if (!review)
           {
              throw new NotFoundException('review id not found');
           }

          if (titleId)
          {
             const result = await this.titleRepository.findByTitle(titleId);
             if (!result)
             {
                throw new NotFoundException('Title id not found ');
             }
             review.titleId = titleId;
             review.titleSlug = result.slug;
          }

         if (message)
         {
            review.message = message;
         }

          return this.reviewModel.save(review);
    }




        async reviewById(id:string):Promise<review| null>
        {
          return this.reviewModel.findOne({ where: {id }});
        }




       async findReviewByUserAndSeller(userId: string, sellerId: string): Promise<review>
       {
          const review = await this.reviewModel.findOne({
          where: { userId, sellerId}});
          return review;
       }





        // latest positive review
         async getLatestReviewBySellerId(sellerIds: any): Promise<review | null>
         {
             const positiveReview = await this.reviewModel.findOne(
       {
                 where: [{ sellerId: In(sellerIds),
                 message: Not(IsNull()),
                 approvedByAdmin:true,
                 titleId: In([
                   "679222b4-fcb4-11ed-a793-f859717be1ac",
                   "679ad26f-fcb4-11ed-a793-f859717be1ac",
                   "67aeb75e-fcb4-11ed-a793-f859717be1ac"
               ])}],
                relations: ['likeDislike'],
                order: { createdAt: 'DESC' }
              });
                return positiveReview;
        }





         //ADMIN APIS
        // review search
    //     async search(skip: number, take: number,  sellerId?: string, userId?: string, message?: string ,type?:string,categoryId ?:string): Promise<any>
    //     {
    //
    //        let whereConditions = {} as {
    //          userId?: any,
    //          message?: any,
    //          titleSlug?: any,
    //          sellerId?: any,
    //       };
    //
    //       if (userId || message || type || sellerId) {
    //         whereConditions = {
    //           userId: userId ?? undefined,
    //           message: message ? Like(`%${message}%`) : undefined,
    //           titleSlug: type === 'to-love' || type === 'to-air' ? Like(`${type}%`) : undefined,
    //           sellerId: sellerId,
    //         };
    //       }
    //
    //      let sellerIds=[];
    //      if (categoryId)
    //      {
    //         const category = await this.categoryRepository.GetCategoryId(categoryId);
    //         sellerIds = category.sellers.map(seller => seller.id);
    //
    //        if (sellerId && sellerIds.find(seller => seller === sellerId))
    //        {
    //           sellerIds = [sellerId];
    //        }
    //
    //        if (sellerId && !sellerIds.find(seller => seller === sellerId))
    //        {
    //         throw new NotFoundException('No reviews were found matching the criteria.');
    //        }
    //
    //        whereConditions.sellerId = categoryId ? In(sellerIds) : (sellerId ? sellerId : undefined)
    //     }
    //
    //     const [result, totalCount] = await this.reviewModel.findAndCount({
    //     where: Object.keys(whereConditions).length !== 0 ? [
    //       whereConditions
    //     ] : [],
    //      skip,
    //      take
    //    });
    //
    //    if (!result.length)
    //    {
    //       throw new NotFoundException('No reviews were found matching the criteria.');
    //    }
    //
    //     return [result, totalCount];
    // }
       async search(skip: number, take: number,  sellerId?: string, userId?: string, message?: string ,type?:string,categoryId ?:string,orderType?:string,orderBy?:string,startDate?:string,endDate?:string): Promise<any>
       {
           let whereConditions = {} as {
              userId?: any,
              message?: any,
              titleSlug?: any,
              sellerId?: any,
           };

          if (userId || message || type || sellerId)
          {
             whereConditions = {
                userId: userId ?? undefined,
                message: message ? Like(`%${message}%`) : undefined,
                titleSlug: type === 'to-love' || type === 'to-air' ? Like(`${type}%`) : undefined,
                sellerId: sellerId,
             };
         }

        let sellerIds=[];
        if (categoryId)
        {
            const category = await this.categoryRepository.GetCategoryId(categoryId);
            sellerIds = category.sellers.map(seller => seller.id);

            if (sellerId && sellerIds.find(seller => seller === sellerId))
            {
                sellerIds = [sellerId];
            }

           if (sellerId && !sellerIds.find(seller => seller === sellerId))
           {
             throw new NotFoundException('No reviews were found matching the criteria.');
           }

            whereConditions.sellerId = categoryId ? In(sellerIds) : (sellerId ? sellerId : undefined)
       }



         const [result, totalCount] = await this.reviewModel.findAndCount(
         {
             where: Object.keys(whereConditions).length !== 0 ? [
             whereConditions] : [],
             relations: ['likeDislike'],
             // skip,
             // take,
         });

        if (!result.length)
        {
             throw new NotFoundException('No reviews were found matching the criteria.');
        }



       const reviewArray = result.map(review =>
       {
          const likeCount = review.likeDislike.filter(result => result.type === 'like').length;
          const dislikeCount = review.likeDislike.filter(result => result.type === 'dislike').length;
          const reportCount = review.likeDislike.filter(result => result.type === 'report').length;
          return {
           ...review,
             count: {
               likeCount,
               dislikeCount,
               reportCount
            }
         };
       });


      if (orderType === 'like' || orderType === 'dislike' || orderType === 'report') {
        const countPropertyMap = {
           like: 'likeCount',
           dislike: 'dislikeCount',
           report: 'reportCount'
        };

          if (orderBy === 'ascending')
          {
             reviewArray.sort((a, b) => b.count[countPropertyMap[orderType]] - a.count[countPropertyMap[orderType]]);
          }
          else if (orderBy === 'descending')
          {
             reviewArray.sort((a, b) => a.count[countPropertyMap[orderType]] - b.count[countPropertyMap[orderType]]);
          }
      }


         // date by
         if (startDate)
         {

              var start = startDate;
              var end = new Date();
              console.log(start)
              console.log(end)



          // reviewArray.sort(function compare(a,b) {





             // Ascending order
             if (orderBy === 'ascending') {
            // return dateA - dateB;
             }


             // Descending order
             if (orderBy === 'descending') {
              // return dateB - dateA;
             }

             //  Default to ascending order
             //  return dateA - dateB;
         //  });
        }



         const paginatedResults = reviewArray.slice(skip, skip + take);
         return [paginatedResults, totalCount];
   }







      // admin update  review status
       async adminUpdateReview(reviewId:string, approvedByAdmin:boolean) : Promise<review| null>
       {
          const review = await this.reviewModel.findOne({ where: { id:reviewId}});
          if (!review)
          {
             return null
          }
          review.approvedByAdmin = approvedByAdmin;
          return this.reviewModel.save(review);

      }




          //delete user with review with likeAndDislike
         async delete(reviewId: string): Promise<review | null>
         {
             const review = await this.reviewModel.findOne({
                  where: { id: reviewId },
                  relations: ['likeDislike'],
             });

            if (!review)
            {
                return null;
            }

           const likeDislikes = review.likeDislike;

           if (likeDislikes && likeDislikes.length > 0)
           {
              for (const likeDislike of likeDislikes)
              {
                  await this.likeDislikeRepository.delete(likeDislike.id);
               }
           }

                 return await this.reviewModel.remove(review);
       }


 }


