export interface ITicket {
  ticketInfo: {
    category: string;
    eventName: string;
    eventDateTime: string;
    price: number;
    total: number;
  };
  inviteInfo: {
    name: string;
    document: string;
    phone: string;
    email: string;
  };
  message: string;
  error: boolean;
}
