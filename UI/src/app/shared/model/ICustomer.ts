export interface ICustomer {
  subscriptionId: string;
  fullName: string;
  document: string;
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
}

interface ICustomerOrderItem {
  name: string;
  price: number;
  quantity: number;
  priceItem: number;
}

export class Customer implements ICustomer {
  subscriptionId!: string;
  fullName!: string;
  document!: string;
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

  constructor(init?: ICustomer) {
    Object.assign(this, init);
  }
}
