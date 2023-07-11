export default interface  createSellerInterface{
    readonly sellerName: string;
    readonly sellerUrl: string;
    readonly  approvedByAdmin: string;
    readonly  type: string;
    readonly  country: string;
    readonly  state: string;
    readonly  address: string;
    readonly  isListing: boolean;
    readonly  categories: string[];
}