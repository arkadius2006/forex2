import {Component} from '@angular/core';

import {SpotTrade} from './SpotTrade';
import {USDJPY} from './CurrencyPair';
import {BUY} from './Side';

const TRADES: SpotTrade[] = [
  {
    currencyPair: USDJPY,
    rate: 12.34,
    quantity: 100,
    side: BUY,
    account: 'Seletsky',
    tradeDate: new Date(),
    settlementDate: new Date()
  }
];

@Component({
  selector: 'app-history',
  template: '<h2>History</h2>' +
  '<ul>' +
  '<li *ngFor="let trade of trades">when: {{trade.tradeDate}} ' +
  'what: {{trade.side}} {{trade.symbol}} - {{trade.account}} ' +
  'how much: {{trade.quantity}} ' +
  'price: {{trade.rate}}</li>' +
  '</ul>'
})

export class HistoryComponent {
  trades: SpotTrade[] = TRADES;
}
