export interface IExploreOffers {
  id: number;
  start_date: Date | string;
  end_date: Date | string;
  last_bid: number;
  product_name: string;
  bids: number;
}

export interface IExploreFilter {
  finished_bids: boolean,
  date: string
}

export class ExploreFilter {
  constructor (
    public finished_bids: boolean = false,
    public date: string = ''
  ) {}
}
