import {SpotTrade} from './SpotTrade';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TradeManager {
  private tradeChange: BehaviorSubject<SpotTrade[]> = new BehaviorSubject<SpotTrade[]>([]);

  constructor() {
    this.tradeChange = new BehaviorSubject([]);
  }

  public add(t: SpotTrade): void {
    const datacopy = this.tradeChange.getValue().slice();
    datacopy.push(t);
    this.tradeChange.next(datacopy);
  }

  public asTradeObservable(): Observable<SpotTrade[]> {
    return this.tradeChange.asObservable();
  }

  public getTrades(): SpotTrade[] {
    return this.tradeChange.getValue();
  }
}
