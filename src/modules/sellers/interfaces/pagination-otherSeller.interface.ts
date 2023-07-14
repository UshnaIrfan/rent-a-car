import {seller} from "../schemas/seller.schema";
export default interface PaginationOtherSellerInterface {
  records: seller[],
  totalRecords: number,
  totalPages: number,
  currentPage: number

}