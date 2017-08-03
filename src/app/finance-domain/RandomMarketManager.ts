import {Observable} from 'rxjs/Observable';
import {Quote} from './Quote';
import {Injectable} from '@angular/core';
import {CurrencyPair, MAJOR_CURRENCY_PAIRS} from './CurrencyPair';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MarketManager} from './MarketManager';

@Injectable()
export class RandomMarketManager implements MarketManager {
  private marketChange: BehaviorSubject<Quote[]> = new BehaviorSubject<Quote[]>([]);

  constructor() {
    setInterval(() => this.triggerMarketChange(), 1000);
  }

  public asMarketObservable(): Observable<Quote[]> {
    return this.marketChange.asObservable();
  }

  public getMarket(): Quote[] {
    return this.marketChange.getValue();
  }

  private triggerMarketChange(): void {
    const quotes: Quote[] = this.generateRandomMarket();
    this.marketChange.next(quotes);
  }

  private generateRandomMarket(): Quote[] {
    const quotes: Quote[] = [];

    let i;
    for (i = 0; i < MAJOR_CURRENCY_PAIRS.length; i += 1) {
      quotes.push(this.generateRandomQuote(MAJOR_CURRENCY_PAIRS[i]));
    }

    return quotes;
  }

  private generateRandomQuote(currencyPair: CurrencyPair): Quote {
    return {
      currencyPair: currencyPair,
      bid: Math.floor(Math.random() * 10000) / 100,
      ask: Math.floor(Math.random() * 10000) / 100,
      timestamp: new Date()
    };
  }
}
