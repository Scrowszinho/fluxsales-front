export interface IBid {
  id: number;
  value: number;
  offer_id: number;
  user_id: number;
  active: boolean;
  created_date: Date | string;
  updated_at: Date | string;
}

export interface ICompleteOffer {
  id: number;
  active: boolean;
  created_date: Date | string;
  updated_at: Date | string;
  start_date: Date | string;
  end_date: Date | string;
  value_interval: number;
  product_id: number;
  last_bid: number;
  bids: number;
  product: {
    id: number;
    name: string;
    description: string;
    value: number;
    final_value: number;
    user: {
      name: string;
    };
  };
  offer_bid: Array<IBid>;
}

export interface ISendBid {
  offer_id: number;
  value: number;
}
