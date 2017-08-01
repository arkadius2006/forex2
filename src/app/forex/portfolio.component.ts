import {CurrencyPosition} from './CurrencyPosition';
import {Component} from '@angular/core';

import {USD, JPY} from './Currency';

// todo mock for now
const POSITIONS: CurrencyPosition[] = [
  {
    account: 'Seletsky',
    currency: USD,
    quantity: 100
  },
  {
    account: 'Seletsky',
    currency: JPY,
    quantity: -200
  }
];

@Component({
  selector: 'app-portfolio',
  template: '<h2>Portfolio</h2>' +
  '<ul>' +
  '<li *ngFor="let position of positions">{{position.account}} {{position.currency}} {{position.quantity}}/</li>' +
  '</ul>'

})

export class PortfolioComponent {
  positions: CurrencyPosition[] = POSITIONS;
}
