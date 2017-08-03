
import {Order} from './Order';
import {Observable} from 'rxjs/Observable';
import {SpotTrade} from './SpotTrade';

export interface Exchange {

  submit(order: Order): void;

  asTradeObservable(): Observable<SpotTrade>;
}
