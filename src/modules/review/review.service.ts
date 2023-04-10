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
import {clicksTypes} from "./schemas/create-click-types.schema";
import createClickTypesInteface from "./interfaces/create-click-types.dto";
import { seller } from "../sellers/schemas/seller.schema";
import { review } from "./schemas/submit-review.schema";
import {clicksTypesRepository} from "./respositories/clicksTypes.repository";
import {clicksTitlesRepository} from "./respositories/clicksTitles.repository";

import { category } from "../categories/schemas/category.schema";
import paginationInterface from "./interfaces/pagination.interface";
import createClicksTypesInterface from "./interfaces/create-click-types.dto";
import createClickTitleInteface from "./interfaces/create-clicks-titles.interface";
import { clicksTitle } from "./schemas/create-clicks-titles.schema";

@Injectable()
export class ReviewService {


  constructor(
    private readonly reviewRepository:reviewRepository,
    private readonly sellerRepository:sellerRepository,
    private readonly clicksTypeRepository:clicksTypesRepository,
    private readonly clicksTitleRepository:clicksTitlesRepository,
    ){}


       // create click types  (hidden)
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




        //  create click titles(simple)
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
         async  getAllTitle( ):Promise<{types: clicksTypes[]}>
         {
             const typeResult = await this.clicksTitleRepository.getAllReviewsTitle()
             if(!typeResult)
             {
                 throw new  NotFoundException('Balloon not exist');
             }
                return { types: typeResult};
         }




       // submit review
       async submitReview(createReviewInterface:submitReviewInterface): Promise<review>
       {
           const seller=  await this.sellerRepository.getSellerId(createReviewInterface.sellerId);
           if (!seller)
           {
               throw new  NotFoundException('seller not found')
           }

          const type=  await this.clicksTitleRepository.findByTitle(createReviewInterface.titleId);
          if (!type)
          {
              throw new  NotFoundException('Balloon title not found')
          }

         const slug=  await this.clicksTitleRepository.findBySlug(createReviewInterface.slug);
         if (!slug)
         {
           throw new  NotFoundException('slug not found')
         }

            return this.reviewRepository.submitReview(createReviewInterface);
       }




         // get  reviews (pagination)
       async getReview(pageNumber: number):Promise<paginationInterface>
       {
         const pageSize = 3;
         const skip = (pageNumber - 1) * pageSize;
         const [result, totalCount] = await this.reviewRepository.findAndCount(skip, pageSize);
         const totalPages = Math.ceil(totalCount / pageSize);

         if (result.length === 0)
         {
            throw new NotFoundException('No records found');
         }

        return {
           records: result,
           totalRecords: totalCount,
           totalPages,
           currentPage: pageNumber,
         };
     }




}
