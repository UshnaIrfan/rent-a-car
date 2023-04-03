export default interface  createSellerInterface{

 //  readonly sellerId: string;
    readonly sellerName: string;
    readonly sellerUrl: string;
    readonly  approvedByAdmin: boolean;
    readonly  isListing: boolean;
    readonly categories: string[];
}