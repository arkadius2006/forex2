import {Injectable} from '@angular/core';
import {Quote} from '../finance-domain/Quote';
import {CurrencyPair, MAJOR_CURRENCY_PAIRS, USDJPY} from '../finance-domain/CurrencyPair';

@Injectable()
export class MarketService {
  getMarketPromise(): Promise<Quote[]> {
    const quotes: Quote[] = this.generateRandomQuotes();
    return Promise.resolve(quotes);
  }

  generateRandomQuotes(): Quote[] {
    const quotes: Quote[] = [];
    let i;
    for (i = 0; i < MAJOR_CURRENCY_PAIRS.length; i += 1) {
      quotes.push(this.generateQuote(MAJOR_CURRENCY_PAIRS[i]));
    }

    return quotes;
  }

  private generateQuote(currencyPair: CurrencyPair): Quote {
    return {
      currencyPair: currencyPair,
      bid: Math.floor(Math.random() * 10000) / 100,
      ask: Math.floor(Math.random() * 10000) / 100,
      timestamp: new Date()
    };
  }

  getDelayedMarketPromise(): Promise<Quote[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getMarketPromise());
      }, 2000);
    });
  }
}
