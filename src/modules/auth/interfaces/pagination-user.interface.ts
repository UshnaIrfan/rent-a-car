import {User} from "../../users/schemas/user.schema";
export default interface paginationUserInterface
{
  records: User[],
  totalRecords: number,
  totalPages: number,
  currentPage: number

}