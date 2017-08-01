import {Currency, JPY, USD} from './Currency';

export class CurrencyPair {

  constructor(public baseCurrency: Currency, public counterCurrency: Currency) {
  }
}

export const USDJPY: CurrencyPair = new CurrencyPair(USD, JPY);
