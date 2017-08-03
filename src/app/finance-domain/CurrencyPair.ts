import {AUD, CAD, CHF, Currency, EUR, GBP, JPY, NZD, USD} from './Currency';
import {isNullOrUndefined} from 'util';

export class CurrencyPair {

  public static lookup(s: string): CurrencyPair {
    if (s) {

      let i;
      let cp;
      for (i = 0; i < MAJOR_CURRENCY_PAIRS.length; i += 1) {
        cp = MAJOR_CURRENCY_PAIRS[i];
        if (cp.toString().toLowerCase().replace('/', '') === s.toLowerCase().replace('/', '')) {
          return cp;
        }
      }
      return null;
    } else {
      return null;
    }
  }

  public static lookupByCurrencies(c1: Currency, c2: Currency): CurrencyPair {
    if (isNullOrUndefined(c1) || isNullOrUndefined(c2)) {
      return null;
    }

    let i: number;
    let cp: CurrencyPair;
    for (i = 0; i < MAJOR_CURRENCY_PAIRS.length; i += 1) {
      cp = MAJOR_CURRENCY_PAIRS[i];

      if (cp.getBaseCurrency() === c1 && cp.getCounterCurrency() === c2) {
        return cp;
      }
    }

    return null;
  }

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
