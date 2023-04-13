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
import updateCategoryInterface from "../categories/interfaces/update-category.interface";


@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository:reviewRepository,
    private readonly sellerRepository:sellerRepository,
    private readonly clicksTypeRepository:clicksTypesRepository,
    private readonly clicksTitleRepository:clicksTitlesRepository,
    private readonly usersRepository:UsersRepository,
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
    ){}


       // create click types
       async createClicksTypes(clickReviewInterface:createClicksTypesInterface,accessToken: string):Promise<clicksTypes>
       {
           const cachedToken = await this.cacheManager.get(accessToken);
           if (!cachedToken)
           {
              throw new UnauthorizedException('Token expired');
           }


           const decoded = await this.jwtService.verify(accessToken, { secret:jwtConstants.secret, });
           const user = await this.usersRepository.findUserByID(decoded.id)
           if(!user)
           {
             throw new  NotFoundException('invalid user')
           }

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
        async createClicksTitles(reqBody:createClicksTitlesInterface,accessToken: string): Promise<{record:clicksTitle}>
        {

            const cachedToken = await this.cacheManager.get(accessToken);
            if (!cachedToken)
            {
              throw new UnauthorizedException('Token expired');
            }


            const decoded = await this.jwtService.verify(accessToken, { secret:jwtConstants.secret, });
            const user = await this.usersRepository.findUserByID(decoded.id)
            if(!user)
            {
              throw new  NotFoundException('invalid user')
            }

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
            const cachedToken = await this.cacheManager.get(accessToken);
            if (!cachedToken)
            {
               throw new UnauthorizedException('Token expired');
            }

            const decoded = await this.jwtService.verify(accessToken, { secret:jwtConstants.secret, });
            const user = await this.usersRepository.findUserByID(decoded.id)
            if(!user)
            {
               throw new  NotFoundException('invalid user')
            }


            const seller=  await this.sellerRepository.getSellerId(createReviewInterface.sellerId);
            if(!seller)
            {
               throw new  NotFoundException('seller not found')
            }

           const title=  await this.clicksTitleRepository.findByTitle(createReviewInterface.titleId);
           if (!title)
           {
              throw new  NotFoundException('Balloon title not found')
           }

          const reviewData: submitReviewInterface & { userId: string, titleSlug: string } = {
            ...createReviewInterface,
            userId: decoded.id,
            titleSlug:title.slug
          };

          return this.reviewRepository.submitReview(reviewData);
      }




         // get  reviews (pagination)
     //    async getReview(pageNumber: number):Promise<paginationInterface>
     //    {
     //       const pageSize = 3;
     //       const skip = (pageNumber - 1) * pageSize;
     //       const [result, totalCount] = await this.reviewRepository.findAndCount(skip, pageSize);
     //       const totalPages = Math.ceil(totalCount / pageSize);
     //
     //       if (result.length === 0)
     //       {
     //          throw new NotFoundException('No records found');
     //       }
     //
     //     return {
     //         records: result,
     //         totalRecords: totalCount,
     //         totalPages,
     //         currentPage: pageNumber,
     //     };
     // }




         // balloons count
     //  async getReviewsWithCounts()
     //  {
     //      const reviews = await this.reviewRepository.review();
     //      const counts = {};
     //      const groupedReviews = {};
     //
     //     for (const review of reviews)
     //     {
     //        const { titleId } = review;
     //        counts[titleId] = counts[titleId] ? counts[titleId] + 1 : 1;
     //        if (!groupedReviews[titleId])
     //        {
     //            groupedReviews[titleId] = [];
     //        }
     //           groupedReviews[titleId].push(review);
     //    }
     //
     //     const result = Object.entries(groupedReviews).map(([titleId, reviews]) => ({
     //         titleId,
     //         count: counts[titleId],
     //         reviews,
     //      }));
     //
     //       return result;
     // }

        async getReviewsWithCounts(sellerId: string)
        {

         const seller = await this.sellerRepository.getSellerById(sellerId)
         if (!seller)
         {
           throw new NotFoundException(`Seller  not found`);
         }

        const reviews = await this.reviewRepository.review(sellerId);
        const counts = {};

        for (const review of reviews)
        {
          const { titleId } = review;
          counts[titleId] = counts[titleId] ? counts[titleId] + 1 : 1;
        }

       const titles = Object.keys(counts);
       const result = [];

       for (const titleId of titles)
       {
         //const titleReviews = reviews.filter((review) => review.titleId === titleId);
          const count = counts[titleId];
          result.push({
          titleId,
          count,
        //  reviews: titleReviews,
         });
       }
       return { seller,result};
    }






       // loved/air  review
  //     async getReviewsWithTypes(sellerId: string)
  //     {
  //        const toAir = [];
  //        const toLove = [];
  //
  //      const seller = await this.reviewRepository.Review(sellerId);
  //      if (!seller)
  //      {
  //        throw new NotFoundException(`Seller not found with ID: ${sellerId}`);
  //      }
  //
  //      const reviews = await this.reviewRepository.review(sellerId);
  //
  //      for (const review of reviews)
  //      {
  //         const title = await this.clicksTitleRepository.findByTitle(review.titleId);
  //         if (!title)
  //         {
  //           throw new NotFoundException(`Title not found with ID: ${review.titleId}`);
  //         }
  //        const matchingSlugTitle = await this.clicksTitleRepository.findBySlug(review.titleSlug);
  //        if (!matchingSlugTitle)
  //        {
  //           throw new NotFoundException(`Title not found with slug: ${review.titleSlug}`);
  //        }
  //
  //       if (title.type === matchingSlugTitle.type)
  //       {
  //           if (title.slug === matchingSlugTitle.slug)
  //           {
  //              if (title.type === 'to-air')
  //              {
  //                 if (review.message !== null)
  //                 {
  //                    toAir.push(review);
  //                 }
  //              }
  //             else if (title.type === 'to-love')
  //             {
  //                if (review.message !== null)
  //                {
  //                    toLove.push(review);
  //                }
  //             }
  //        }
  //        else
  //        {
  //             if (title.type === 'to-air')
  //             {
  //                if (review.message !== null)
  //                {
  //                      toAir.push(review);
  //                }
  //            }
  //            else if (title.type === 'to-love')
  //            {
  //               if (review.message !== null)
  //               {
  //                 toLove.push(review);
  //               }
  //            }
  //        }
  //     }
  //   }
  //       return {  toAir, toLove };
  // }

      async getReviewsWithTypes(sellerId: string, page: number = 1)
      {
         const toAir = [];
         const toLove = [];

        const seller = await this.reviewRepository.Review(sellerId);
        if (!seller)
        {
          throw new NotFoundException(`Seller not found with ID: ${sellerId}`);
        }

       const allReviews = await this.reviewRepository.review(sellerId);

       var toAirCount = 0;
       var toLoveCount = 0;

       for (const review of allReviews)
       {
          const title = await this.clicksTitleRepository.findByTitle(review.titleId);
          if (!title)
          {
              throw new NotFoundException(`Title not found with ID: ${review.titleId}`);
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
                  if (review.message !== null)
                  {
                    toAir.push(review);
                    toAirCount++;
                  }
              }
              else if (title.type === 'to-love')
              {
                 if (review.message !== null)
                 {
                   toLove.push(review);
                   toLoveCount++;
                }
             }
          }
        else
        {
          if (title.type === 'to-air')
          {
            if (review.message !== null)
            {
              toAir.push(review);
              toAirCount++;
            }
          }
          else if (title.type === 'to-love')
          {
            if (review.message !== null)
            {
              toLove.push(review);
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

      const totalToAirRecords = toAirCount;
      const totalToLoveRecords = toLoveCount;
      const totalToAirPages = Math.ceil(toAirCount / limit);
      const totalToLovePages = Math.ceil(toLoveCount / limit);

    return {
      toAir: {
         data: paginatedToAirReviews,
         totalRecords: totalToAirRecords,
         totalPages: totalToAirPages,
         currentPage: page
      },
      toLove: {
         data: paginatedToLoveReviews,
         totalRecords: totalToLoveRecords,
         totalPages: totalToLovePages,
         currentPage: page
      }
    };
  }




     //update review
      async  updateReview(updateReviewInterface:updateReviewInterface):Promise<{ message: string, updateReview:updateReviewInterface}>
      {
        const updateReview = await this.reviewRepository.updateReview(updateReviewInterface.sellerId , updateReviewInterface.message);
        if (!updateReview)
        {
           throw new NotFoundException('seller id not found');
        }

         return { message: "updated successfully" ,updateReview};

     }


}