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
