export default interface  createSellerInterface{

    readonly sellerName: string;
    readonly sellerUrl: string;
    //readonly  approvedByAdmin: boolean;
    readonly  approvedByAdmin: string;
    readonly  isListing: boolean;
    readonly  categories: string[];
}