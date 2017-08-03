import {Quote} from './Quote';
import {Observable} from 'rxjs/Observable';
import {CurrencyPair} from './CurrencyPair';

export interface MarketManager {
  asMarketObservable(): Observable<Quote[]> ;

  getMarket(): Quote[];

  getQuote(currencyPair: CurrencyPair): Quote;
}
