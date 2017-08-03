import {isNullOrUndefined} from 'util';

export class Currency {

  public static lookup(name: string): Currency {
    if (isNullOrUndefined(name)) {
      return null;
    }

    name = name.trim().toLowerCase().replace('/', '');

    let i: number;
    let c: Currency;

    for (i = 0; i < MAJOR_CURRENCIES.length; i += 1) {
      c = MAJOR_CURRENCIES[i];

      if (c.toString().trim().toLowerCase().replace('/', '') === name) {
        return c;
      }
    }

    return null;
  }

  constructor(private symbol: string) {
  }

  public toString(): string {
    return this.symbol;
  }
}

// todo move inside class
export const USD: Currency = new Currency('USD');
export const JPY: Currency = new Currency('JPY');
export const EUR: Currency = new Currency('EUR');
export const GBP: Currency = new Currency('GBP');
export const CHF: Currency = new Currency('CHF');
export const AUD: Currency = new Currency('AUD');
export const NZD: Currency = new Currency('NZD');
export const CAD: Currency = new Currency('CAD');

export const MAJOR_CURRENCIES = [USD, JPY, EUR, GBP, CHF, AUD, NZD, CAD];
