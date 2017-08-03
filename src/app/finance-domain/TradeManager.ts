import {SpotTrade} from './SpotTrade';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TradeManager {
  private trades: SpotTrade[];
  private tradeChange: BehaviorSubject<SpotTrade[]> = new BehaviorSubject<SpotTrade[]>([]);


  constructor() {
    this.trades = [];
    this.tradeChange = new BehaviorSubject([]);
  }

  public add(t: SpotTrade): void {
    this.trades.push(t);

    this.tradeChange.next(this.trades);
  }

  public asTradeObservable(): Observable<SpotTrade[]> {
    return this.tradeChange.asObservable();
  }
}
