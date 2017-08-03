import {Side} from './Side';
import {CurrencyPair} from './CurrencyPair';

export class Order {
  currencyPair: CurrencyPair;
  side: Side;
  quantity: number;
  account: string;
}
