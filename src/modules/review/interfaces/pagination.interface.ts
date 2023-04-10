import { review } from "../schemas/submit-review.schema";

export default interface paginationInterface {

    records: review[],
    totalRecords: number,
    totalPages: number,
    currentPage: number

}