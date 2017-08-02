export class TradeStatus {
  constructor(private s: string) {

  }

  public toString(): string {
    return this.s;
  }
}

export const CAPTURED = new TradeStatus('captured');
export const CONFIRMED = new TradeStatus('confirmed');
export const SETTLED = new TradeStatus('settled');
export const RECONCILED = new TradeStatus('reconciled');


