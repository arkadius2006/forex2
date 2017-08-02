import {Position} from '../finance-domain/Position';
import {Component} from '@angular/core';

import {USD, JPY} from '../finance-domain/Currency';

// todo mock for now
const POSITIONS: Position[] = [
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
  templateUrl: './portfolio.component.html'

})

export class PortfolioComponent {
  positions: Position[] = POSITIONS;
}
