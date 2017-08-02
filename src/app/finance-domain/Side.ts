export class Side {

  constructor(public symbol) {

  }

  public toString(): string {
    return this.symbol;
  }
}

export const BUY = new Side('buy');
export const SELL = new Side('sell');
