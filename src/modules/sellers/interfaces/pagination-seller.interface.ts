import {seller} from "../schemas/seller.schema";
export default interface paginationSellerInterface {
  records: seller[],
  totalRecords: number,
  totalPages: number,
  currentPage: number

}