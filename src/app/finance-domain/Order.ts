import {Side} from './Side';
import {CurrencyPair} from './CurrencyPair';

export class Order {
  currencyPair: CurrencyPair;
  side: Side;
  quantity: number;
  account: string;

  public toString(): string {
    return this.currencyPair.toString() + ' ' + this.side.toString();
  }
}
