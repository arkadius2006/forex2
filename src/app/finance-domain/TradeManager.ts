import {SpotTrade} from './SpotTrade';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {MockExchange} from './MockExchange';
import {NextObserver} from 'rxjs/Observer';

@Injectable()
export class TradeManager {
  private tradeChange: BehaviorSubject<SpotTrade[]> = new BehaviorSubject<SpotTrade[]>([]);

  constructor(private exchange: MockExchange) {
    this.tradeChange = new BehaviorSubject([]);
    exchange.asTradeObservable().subscribe(new TradeKeeper(this));
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

class TradeKeeper implements NextObserver<SpotTrade> {
  next: (value: SpotTrade) => void;

  constructor(tm: TradeManager) {
    this.next = function (val: SpotTrade) {
      if (val) {
        console.log(JSON.stringify(val));
        tm.add(val);
      }
    };
  }
}
