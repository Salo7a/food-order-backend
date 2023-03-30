export interface Order {
  _id?: string;
  name: string;
  email: string;
  address: string;
  postal: number;
  totalAmount: number;
  items: [];
}
