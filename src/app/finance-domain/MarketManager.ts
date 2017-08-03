import {Quote} from './Quote';
import {Observable} from 'rxjs/Observable';

export interface MarketManager {
  asMarketObservable(): Observable<Quote[]> ;

  getMarket(): Quote[];
}
