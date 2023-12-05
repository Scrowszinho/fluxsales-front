export interface IExploreOffers {
  id: number;
  start_date: Date | string;
  end_date: Date | string;
  last_bid: number;
  product_name: string;
  bids: number;
}
