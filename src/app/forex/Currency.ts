export class Currency {
  constructor(public symbol: string) {
  }
}


export const USD: Currency = new Currency('USD');
export const JPY: Currency = new Currency('JPY');
