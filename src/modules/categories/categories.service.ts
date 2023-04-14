import {
  BadRequestException, CACHE_MANAGER,
  ConflictException, Inject,
  Injectable, NotAcceptableException,
  NotFoundException, UnauthorizedException
} from "@nestjs/common";
import { Cache } from 'cache-manager';
import {CategoryRepository} from "./category.repository";
import createCategoryInterface from "./interfaces/create-category.interface";
import { category } from "./schemas/category.schema";
import updateCategoryInterface from "./interfaces/update-category.interface";
import {UsersRepository} from "../users/users.repository";
import { JwtService } from "@nestjs/jwt";
import { seller } from "../sellers/schemas/seller.schema";
import { jwtConstants } from "../auth/constants/constants";


@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoryRepository:CategoryRepository,
    private readonly usersRepository:UsersRepository,
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}


      // create category
      async createCategory(createCategory:createCategoryInterface,accessToken: string):Promise<category>
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


          const  categoryName= await this.categoryRepository.getCategoryByName(createCategory.categoryName);
          if (categoryName)
          {
             throw new ConflictException(' category_name already exists');
          }


         try
         {
            const category = await this.categoryRepository.createCategory(createCategory);
            return category;
         }
         catch (e)
         {
           throw new BadRequestException('Category creation failed');
         }

     }




       // get category by id
       async getCategoryById(id: string):Promise<{ records: category }>
       {
           const category = await this.categoryRepository.getCategoryId(id)
           if (!category)
           {
            throw new  NotFoundException('categories do not exist');
           }

           return { records: category};
      }




        // get all categories
        async getAllCategories() :Promise<{ records: category[] }>
        {
           const categories = await this.categoryRepository.getAllCategories()
           if (!categories)
           {
            throw new  NotFoundException('categories do not exist');
           }

            return { records: categories};
        }




       // update category
       async updateCategory(updateCategory:updateCategoryInterface,accessToken: string):Promise<{ message: string, updateCategory: updateCategoryInterface }>
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


           const update = await this.categoryRepository.updateCategory(updateCategory.id, updateCategory.categoryName);
           if (!update)
           {
             throw new NotFoundException('Category not found');
           }

           return { message: "Category updated successfully", updateCategory };

      }




       // delete category
       async deleteCategory(id:string,accessToken: string): Promise<{ message: string, deletedCategory: category }>
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


           const deletedCategory = await this.categoryRepository.deleteCategory(id);
           if (!deletedCategory)
           {
             throw new NotFoundException('Category not found');
           }


           return { message: "Category deleted successfully", deletedCategory };
       }




     //  common sellers
     async get(id: string):Promise<{ records: seller[] | null }>
     {
       const category = await this.categoryRepository.getCategoryId(id);
       if (!category)
       {
         throw new NotFoundException('Category not found');
       }

       const commonSellers = await this.categoryRepository.getCommonSellers(id, category.sellers);
       return { records: commonSellers.length > 0 ? commonSellers : null };

     }


}
