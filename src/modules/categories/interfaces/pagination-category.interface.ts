import {category} from "../schemas/category.schema";

export default interface paginationCategoryInterface
{
  records: category[],
  totalRecords: number,
  totalPages: number,
  currentPage: number

}