export class Currency {
  constructor(private symbol: string) {
  }

  public toString(): string {
    return this.symbol;
  }
}


export const USD: Currency = new Currency('USD');
export const JPY: Currency = new Currency('JPY');
export const EUR: Currency = new Currency('EUR');
export const GBP: Currency = new Currency('GBP');
export const CHF: Currency = new Currency('CHF');
export const AUD: Currency = new Currency('AUD');
export const NZD: Currency = new Currency('NZD');
export const CAD: Currency = new Currency('CAD');
