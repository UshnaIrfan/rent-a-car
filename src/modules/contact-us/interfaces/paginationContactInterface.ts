import {contact} from "../schemas/contact-us.schema";
export default interface paginationContactInterface {
   records: contact[],
   totalRecords: number,
   totalPages: number,
   currentPage: number
}