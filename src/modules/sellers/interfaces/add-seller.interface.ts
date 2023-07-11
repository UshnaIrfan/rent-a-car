export default interface  addSellerInterface{
    readonly sellerName: string;
    readonly sellerUrl: string;
    readonly  approvedByAdmin: string;
    readonly  type: string;
    readonly  country: string;
    readonly  state: string;
    readonly  address: string;
    readonly  isListing: boolean;
    readonly  categories: string[];
    readonly   titleId: string;
    readonly   message: string;
    readonly  approvedbyAdmin: boolean;
    readonly  bestWriter: boolean;
}