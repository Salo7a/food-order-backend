export interface Meal {
  _id?: string;
  name: string;
  email: string;
  address: string;
  postal: number;
  totalAmount: number;
  items: object[];
}
