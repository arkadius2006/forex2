import {Order} from './Order';
import {Component} from '@angular/core';
import {Side} from './Side';

// todo mock for now
const ORDERS: Order[] = [
  {
    account: 'Selesky',
    symbol: 'USDJPY',
    side: Side.buy,
    quantity: 100,
    price: 12.34,
    timestamp: 123456
  },
  {
    account: 'Selesky',
    symbol: 'EURUSD',
    side: Side.sell,
    quantity: 200,
    price: 56.34,
    timestamp: 123478
  },
  {
    account: 'Selesky',
    symbol: 'GBPUSD',
    side: Side.buy,
    quantity: 300,
    price: 78.34,
    timestamp: 435676
  }
];

@Component({
  selector: 'app-history',
  template: '<h2>History</h2>' +
  '<ul>' +
  '<li *ngFor="let order of orders">when: {{order.timestamp}} ' +
  'what: {{order.side}} {{order.symbol}} - {{order.account}} ' +
  'how much: {{order.quantity}} ' +
  'price: {{order.price}}</li>' +
  '</ul>'
})

export class HistoryComponent {
  orders: Order[] = ORDERS;
}
