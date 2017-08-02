import {CurrencyPair} from './CurrencyPair';

export class Quote {
  currencyPair: CurrencyPair;
  bid: number;
  ask: number;
  timestamp: Date;
}
