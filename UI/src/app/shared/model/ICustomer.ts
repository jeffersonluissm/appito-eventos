export interface ICustomer {
  subscriptionId: string;
  name: string;
  documentNumber: string;
  phone: string;
  email: string;
  addressDetails: {
    zipcode: string;
    address: string;
    addressNumber: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  order: {
    date: string;
    name: string;
    time: string;
    items: ICustomerOrderItem[];
  };
  source: string | null;
}

interface ICustomerOrderItem {
  name: string;
  price: number;
  quantity: number;
  priceItem: number;
}

export class Customer implements ICustomer {
  subscriptionId!: string;
  name!: string;
  documentNumber!: string;
  phone!: string;
  email!: string;
  addressDetails!: {
    zipcode: string;
    address: string;
    addressNumber: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  order!: { date: string; name: string; time: string; items: ICustomerOrderItem[] };
  source!: string;

  constructor(init?: ICustomer) {
    Object.assign(this, init);
  }
}
