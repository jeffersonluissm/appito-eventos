export interface ILandingTicket {
  available: boolean;
  date: string;
  icon: string;
  items: ITicketItem[];
  name: string;
  'status-text': string;
  time: string;
  expand?: boolean;
}

export interface ITicketItem {
  icon: string;
  max: number;
  min: number;
  name: string;
  price: number;
  quantity?: number;
}
