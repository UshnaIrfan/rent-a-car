import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { category } from "../../categories/schemas/category.schema";
import {seller} from "./seller.schema";

@Entity({ name: 'seller_categories' })
export class sellerCategory {

   @PrimaryGeneratedColumn('uuid')
   id: string;


   @ManyToOne(() => seller, seller => seller.sellerCategories)
   seller: seller;


   @ManyToOne(() => category, category => category.sellerCategories)
   category: category;

}