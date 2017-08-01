import {Side} from './Side';

export class Order {
  symbol: string;
  side: Side;
  quantity: number;
  price: number;
  account: string;
  timestamp: number;
}
