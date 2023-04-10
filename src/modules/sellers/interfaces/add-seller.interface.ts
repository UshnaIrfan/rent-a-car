export default interface  addSellerInterface{

    readonly sellerName: string;
    readonly sellerUrl: string;
    readonly  approvedByAdmin: boolean;
    readonly  isListing: boolean;
    readonly  categories: string[];
    readonly   titleId: string;
    readonly   slug: string;
    readonly   message: string;

}