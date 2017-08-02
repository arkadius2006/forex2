import {Currency, EUR, JPY, USD} from './Currency';

export class CurrencyPair {

  constructor(private baseCurrency: Currency, private counterCurrency: Currency) {
  }

  public toString(): string {
      return this.baseCurrency + '/' + this.counterCurrency;
  }
}

export const USDJPY: CurrencyPair = new CurrencyPair(USD, JPY);
export const EURUSD: CurrencyPair = new CurrencyPair(EUR, USD);
