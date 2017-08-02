import {Quote} from '../finance-domain/Quote';
import {Component} from '@angular/core';
import {EURUSD, USDJPY} from '../finance-domain/CurrencyPair';

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
  templateUrl: './market.component.html'
})

export class MarketComponent {
  quotes: Quote[] = QUOTES;
}
