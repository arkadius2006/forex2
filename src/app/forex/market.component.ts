import {Quote} from './Quote';
import {Component} from '@angular/core';
import {EURUSD, USDJPY} from './CurrencyPair';

// todo: move to mock const market service
const QUOTES: Quote[] = [
  {
    currencyPair: USDJPY,
    bid: 12.34,
    ask: 34.12,
    timestamp: 123456
  },
  {
    currencyPair: EURUSD,
    bid: 56.34,
    ask: 34.56,
    timestamp: 123478
  }
];

@Component({
  selector: 'app-market',
  template: '<h2>Market</h2>' +
  '<ul>' +
  '<li *ngFor="let quote of quotes">{{quote.currencyPair}} bid {{quote.bid}} ask {{quote.ask}} timestamp {{quote.timestamp}}</li>' +
  '</ul>'
})

export class MarketComponent {
  quotes: Quote[] = QUOTES;
}
