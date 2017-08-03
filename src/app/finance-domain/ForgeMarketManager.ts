import {Observable} from 'rxjs/Observable';
import {Quote} from './Quote';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MarketManager} from './MarketManager';
import {Http} from '@angular/http';
import {NextObserver} from 'rxjs/Observer';
import {Response} from '@angular/http/src/static_response';
import {Currency} from './Currency';
import {CurrencyPair, MAJOR_CURRENCY_PAIRS} from './CurrencyPair';


@Injectable()
export class ForgeMarketManager implements MarketManager {
  private marketChange: BehaviorSubject<Quote[]> = new BehaviorSubject<Quote[]>([]);
  private forgeResponseObserver: ForgeResponseObserver;

  constructor(private http: Http) {
    this.forgeResponseObserver = new ForgeResponseObserver(this);
    this.queryForge();
  }

  public asMarketObservable(): Observable<Quote[]> {
    return this.marketChange.asObservable();
  }

  public getMarket(): Quote[] {
    return this.marketChange.getValue();
  }

  private queryForge(): void {
    console.log('Sending request to forge');

    this.http.get(this.getQuotesUrl()).subscribe(this.forgeResponseObserver);
  }

  processResponse(response: Response): void {
    console.log('Received response from forge: ' + response.toString());

    if (response.ok) {
      this.processOkResponse(response);
    } else {
      console.error('Error getting data from forge: ' + response.status + ', ' + response.statusText);
    }

    // ask for more
    setTimeout(() => this.queryForge(), 1000);
  }

  private processOkResponse(response: Response): void {
    const json = response.json();

    const quotes: Quote[] = this.parseJson(json);

    this.marketChange.next(quotes);
  }

  private parseJson(json: any): Quote[] {
    const quotes: Quote[] = [];
    let i: number;
    let item: any;
    for (i = 0; i < json.length; i += 1) {
      item = json[i];

      if (item) {
        const quote = this.parseQuote(item);

        if (quote) {
          quotes.push(quote);
        }
      }
    }

    return quotes;
  }

  private parseQuote(item: any): Quote {
    const symbol: string = item['symbol'];
    const price: number = item['price'];

    if (symbol && price) {
      const ccy1 = symbol.substr(0, 3);
      const ccy2 = symbol.substr(3, 3);
      const theTimestamp = new Date();

      return {
        timestamp: theTimestamp,
        currencyPair: new CurrencyPair(new Currency(ccy1), new Currency(ccy2)), // todo currencies singletons
        bid: price,
        ask: price
      };
    } else {
      return null;
    }
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

class ForgeResponseObserver implements NextObserver<Response> {
  next: (value: Response) => void;

  constructor(private forgeMarketManager: ForgeMarketManager) {
    this.next = function (value: Response) {
      forgeMarketManager.processResponse(value);
    };
  }
}

// todo move to config and hide
export const secret = {
  '1forge.com': {
    'api_key': 'vO3LdQiJcUjzle3R8WcYj2I8v7QYMnPf'
  }
};

