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
  templateUrl: './history.component.html'
})

export class HistoryComponent {
  trades: SpotTrade[] = TRADES;
}
