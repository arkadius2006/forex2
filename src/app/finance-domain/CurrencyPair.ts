import {AUD, CAD, CHF, Currency, EUR, GBP, JPY, NZD, USD} from './Currency';

export class CurrencyPair {

  constructor(private baseCurrency: Currency, private counterCurrency: Currency) {
  }

  public toString(): string {
      return this.baseCurrency + '/' + this.counterCurrency;
  }

  public getBaseCurrency(): Currency {
    return this.baseCurrency;
  }

  public getCounterCurrency(): Currency {
    return this.counterCurrency;
  }
}

// major currency pairs
export const USDJPY: CurrencyPair = new CurrencyPair(USD, JPY);
export const EURUSD: CurrencyPair = new CurrencyPair(EUR, USD);
export const GBPUSD: CurrencyPair = new CurrencyPair(GBP, USD);
export const USDCHF: CurrencyPair = new CurrencyPair(USD, CHF);
export const EURGBP: CurrencyPair = new CurrencyPair(EUR, GBP);
export const EURJPY: CurrencyPair = new CurrencyPair(EUR, JPY);
export const EURCHF: CurrencyPair = new CurrencyPair(EUR, CHF);
export const AUDUSD: CurrencyPair = new CurrencyPair(AUD, USD);
export const USDCAD: CurrencyPair = new CurrencyPair(USD, CAD);
export const NZDUSD: CurrencyPair = new CurrencyPair(NZD, USD);

export const MAJOR_CURRENCY_PAIRS = [USDJPY, EURUSD, GBPUSD, USDCHF, EURGBP, EURJPY, EURCHF, AUDUSD, USDCAD, NZDUSD];
