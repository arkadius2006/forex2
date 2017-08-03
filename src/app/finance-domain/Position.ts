import {Currency} from './Currency';

export class Position {
  account: string;
  currency: Currency;
  quantity: number;

  public toString(): string {
    return this.account + ' ' + this.currency + ' ' + this.quantity;
  }
}
