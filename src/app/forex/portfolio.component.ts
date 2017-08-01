import {Position} from './Position';
import {Component} from '@angular/core';

// todo mock for now
const POSITIONS: Position[] = [
  {
    account: 'Seletsky',
    currency: 'USD',
    quantity: 100
  },
  {
    account: 'Seletsky',
    currency: 'JPY',
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
  positions: Position[] = POSITIONS;
}
