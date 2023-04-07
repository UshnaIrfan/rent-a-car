import {
  BadRequestException,
  ConflictException, Get,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common";
import submitReviewInterface from "./interfaces/submit-review.interface";
import {reviewRepository} from "./respositories/review.respository";
import createClicksTitlesInterface from "./interfaces/create-clicks-titles.interface";
import {CategoryRepository} from "../categories/category.repository";
import {sellerRepository} from "../sellers/seller.repository";
import { clicks } from "./schemas/create-clicks-titles.schema";
import createClickTypesInteface from "./interfaces/create-click-types.dto";
import { seller } from "../sellers/schemas/seller.schema";
import { review } from "./schemas/submit-review.schema";
import { clicksTypes } from "./schemas/create-click-types.schema";
import {clicksTypesRepository} from "./respositories/clicksTypes.repository";
import {clicksRepository} from "./respositories/clicksTitles.repository";


@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository:reviewRepository,
    private readonly sellerRepository:sellerRepository,
    private readonly clicksTypeRepository:clicksTypesRepository,
    private readonly clicksRepository:clicksRepository,
    ){}


       // create click titles  (hidden)
       // async createClicks(clickReviewInterface:createClicksTitlesInterface):Promise<clicks>
       // {
       //     const click = await this.clicksRepository.findBySlug(clickReviewInterface.slug);
       //     if (click)
       //     {
       //       throw new ConflictException('already exist');
       //     }
       //
       //
       //    try
       //     {
       //        return this.clicksRepository.createClicks(clickReviewInterface);
       //     }
       //     catch (error)
       //     {
       //       throw new BadRequestException('Failed to create clicks review');
       //     }
       // }



        // create click types   (many to many relation)
    //     async createClickedTypes(reqBody:createClickTypesInteface)
    //     {
    //        const existingClickTypes = await this.clicksTypeRepository.findByType(reqBody.type);
    //        if (existingClickTypes)
    //        {
    //          throw new ConflictException('Click type already exist');
    //        }
    //
    //        const clicked = await this.clicksTypeRepository.createClicksTypes(reqBody);
    //        clicked.clicks = [];
    //        const clickIDs = reqBody.clicks;
    //        for (const clickID of clickIDs)
    //        {
    //           const clicks = await this.clicksRepository.findBySlug(clickID);
    //           if (!clicks)
    //           {
    //               throw new NotFoundException('click slug does not exist');
    //           }
    //          clicked.clicks.push(clicks)
    //
    //      }
    //
    //         await this.clicksTypeRepository.creatClickTypes(clicked);
    //         return { record: clicked };
    // }




        //  create click types (simple)
        async createClicksTypes(reqBody:createClickTypesInteface):Promise<{ record:clicksTypes}>
        {
           const existingClickTypes = await this.clicksTypeRepository.findByType(reqBody.type);
           if (existingClickTypes)
           {
              throw new ConflictException('Balloon already exist');
           }

           const clicked = await this.clicksTypeRepository.createClicksTypes(reqBody);
           return { record: clicked };
       }




       //all review types with titles
   //     async  getAllTypes( ):Promise<{ slugs:clicks[], types: clicksTypes[]}>
   //     {
   //        const titleResult = await this.clicksRepository.getAllReviewsTitle()
   //        if(!titleResult)
   //        {
   //           throw new  NotFoundException('slug not not exist');
   //        }
   //       const typeResult = await this.clicksTypeRepository.getAllReviewsTypes()
   //       if(!typeResult)
   //       {
   //          throw new  NotFoundException('balloon not exist');
   //       }
   //       return {
   //            slugs: titleResult,
   //            types: typeResult,
   //       };
   // }



       //all review types with titles
       async  getAllTypes( ):Promise<{types: clicksTypes[]}>
       {
          const typeResult = await this.clicksTypeRepository.getAllReviewsTypes()
          if(!typeResult)
          {
             throw new  NotFoundException('Balloon not exist');
          }
            return { types: typeResult};
      }





       // submit review
       async submitReview(createReviewInterface:submitReviewInterface): Promise<review>
       {
           const reaction=  await this.sellerRepository.getSellerId(createReviewInterface.sellerId);
           if (!reaction)
           {
               throw new  NotFoundException('seller not found')
           }

          const reactionTypes=  await this.clicksTypeRepository.getByTypeId(createReviewInterface.balloonId);
          if (!reactionTypes)
          {
              throw new  NotFoundException('Balloon not found')
          }

            return this.reviewRepository.submitReview(createReviewInterface);
       }





       //get review title associated with review types
     //  async getReviewBySlugName(slug: string):Promise<{ record: clicks }>
     //  {
     //     const reaction = await this.clicksRepository.findBySlug(slug);
     //     if (!reaction)
     //     {
     //         throw new NotFoundException('slug name not found');
     //     }
     //    else
     //    {
     //       const result = await this.clicksRepository.getClickAssociatedTypes(reaction.id);
     //       if (!result)
     //       {
     //          throw new NotFoundException('This type not found');
     //       }
     //      return { record: result };
     //    }
     // }



}
