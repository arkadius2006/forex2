import {Injectable} from '@angular/core';
import {Quote} from '../finance-domain/Quote';
import {CurrencyPair, MAJOR_CURRENCY_PAIRS} from '../finance-domain/CurrencyPair';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {Currency} from '../finance-domain/Currency';

@Injectable()
export class MarketService {

  private getStaticMarketPromise(): Promise<Quote[]> {
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
        resolve(this.getStaticMarketPromise());
      }, 1000);
    });
  }

  constructor(private http: Http) {
  }

  private getQuotePromiseLive(): Promise<Quote[]> {
    const observable: Observable<Response> = this.http.get(this.getQuotesUrl());
    const promise: Promise<Response> = observable.toPromise();
    return promise.then(response => {
      const update: Quote[] = [];

      const json = response.json();
      console.log(json);

      let i;
      let item;
      let symbol;
      let price: number;
      const theTimestamp = new Date();
      let ccy1, ccy2;
      let quote: Quote;
      for (i = 0; i < json.length; i += 1) {
        item = json[i];
        if (item) {
          symbol = item['symbol'];
          price = item['price'];

          if (symbol && price) {
            ccy1 = symbol.substr(0, 3);
            ccy2 = symbol.substr(3, 3);

            quote = {
              timestamp: theTimestamp,
              currencyPair: new CurrencyPair(new Currency(ccy1), new Currency(ccy2)), // todo currencies singletons
              bid: price,
              ask: price
            };

            update.push(quote);
          }
        }
      }

      return update;
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private getQuotesUrl(): string {
    let sum = '';
    let i;
    let cp;
    const count = MAJOR_CURRENCY_PAIRS.length;
    for (i = 0; i < count; i += 1) {
      cp = MAJOR_CURRENCY_PAIRS[i];
      sum += cp.getBaseCurrency().toString() + cp.getCounterCurrency().toString();
      if (i < count - 1) {
        sum += ',';
      }
    }

    return 'https://forex.1forge.com/1.0.2/quotes?pairs=' + sum + '&api_key=' + secret['1forge.com']['api_key'];
  }
}

// todo move to config and hide
export const secret = {
  '1forge.com': {
    'api_key': 'vO3LdQiJcUjzle3R8WcYj2I8v7QYMnPf'
  }
};


