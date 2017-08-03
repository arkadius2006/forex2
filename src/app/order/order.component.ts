import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {AccountComponent} from '../account/account.component';
import {isNull, isNullOrUndefined, isUndefined} from 'util';
import {CurrencyPair} from '../finance-domain/CurrencyPair';
import {RandomMarketManager} from '../finance-domain/RandomMarketManager';
import {BUY, SELL} from '../finance-domain/Side';
import {MockExchange} from '../finance-domain/MockExchange';
import {Order} from '../finance-domain/Order';

@Component({
  selector: 'app-order-component',
  styleUrls: ['order.component.css'],
  templateUrl: 'order.component.html',
})

export class OrderComponent implements OnInit {
  @ViewChild('yourCurrencyPair') yourCurrencyPairComponent: ElementRef;
  @ViewChild('yourAccount') yourAccountComponent: AccountComponent;
  @ViewChild('yourQuantity') yourQuantityComponent: ElementRef;

  yourBid: number;
  yourAsk:  number;

  constructor(private marketManager: RandomMarketManager, private exchange: MockExchange) {
  }

  ngOnInit() {
    Observable.fromEvent(this.yourCurrencyPairComponent.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
      this.updateRates();
      });

    this.marketManager.asMarketObservable().subscribe((val) => this.updateRates());
  }

  private updateRates() {
    console.log('Check rates');
    console.log('Text field = ' + this.yourCurrencyPairComponent.nativeElement.value);

    const val = this.yourCurrencyPairComponent.nativeElement.value;

    if (val) {
      const cp = CurrencyPair.lookup(val);
      if (cp) {
        const q = this.marketManager.getQuote(cp);
        if (q) {
          this.yourBid = q.bid;
          this.yourAsk = q.ask;
          console.log('Updated rates ' + this.yourBid + ' ' + this.yourAsk);

          return;
        } else {
          console.log('No md for ' + cp);
        }
      } else {
        console.log('cannot resolve cp ' + val);
      }
    } else {
      console.log('no currency pair entered');
    }

    this.yourBid = null;
    this.yourAsk = null;
  }

  onBuyButtonClicked(): void {
    this.buy(
      this.yourAccountComponent.get(),
      this.yourCurrencyPairComponent.nativeElement.value,
      this.yourQuantityComponent.nativeElement.value);
  }

  private buy(account: string, pairString: string, quantityString: string): void {
    if (isUndefined(account) || isNull(account) || account === '') {
      console.log('Invalid account');
      return;
    }

    let currencyPair: CurrencyPair;
    if (isUndefined(pairString) || isNull(pairString) || pairString === '') {
      console.log('Invalid pairString');
      return;
    }

    currencyPair = CurrencyPair.lookup(pairString);
    if (isNullOrUndefined(currencyPair)) {
      console.log('Invalid currency pairString');
      return;
    }

    if (isUndefined(quantityString) || isNull(quantityString) || quantityString === '') {
      console.log('Invalid quantityString');
      return;
    }

    const quantity: number = parseFloat(quantityString);
    if (quantity > 0) {

    } else {
      console.log('Invalid qty');
      return;
    }

    this.doBuy(account, currencyPair, quantity);
  }

  doBuy(account: string, currencyPair: CurrencyPair, quantity: number): void {
    console.log('BUY ' + account + ' ' + currencyPair + ' ' + quantity);

    const order: Order = {
      currencyPair: currencyPair,
      account: account,
      quantity: quantity,
      side: BUY};

    this.exchange.submit(order);
  }

  onSellButtonClicked(): void {
    this.sell(
      this.yourAccountComponent.get(),
      this.yourCurrencyPairComponent.nativeElement.value,
      this.yourQuantityComponent.nativeElement.value);
  }

  private sell(account: string, pairString: string, quantityString: string): void {
    if (isUndefined(account) || isNull(account) || account === '') {
      console.log('Invalid account');
      return;
    }

    let currencyPair: CurrencyPair;
    if (isUndefined(pairString) || isNull(pairString) || pairString === '') {
      console.log('Invalid pairString');
      return;
    }

    currencyPair = CurrencyPair.lookup(pairString);
    if (isNullOrUndefined(currencyPair)) {
      console.log('Invalid currency pairString');
      return;
    }

    if (isUndefined(quantityString) || isNull(quantityString) || quantityString === '') {
      console.log('Invalid quantityString');
      return;
    }

    const quantity: number = parseFloat(quantityString);
    if (quantity > 0) {

    } else {
      console.log('Invalid qty');
      return;
    }

    this.doSell(account, currencyPair, quantity);
  }

  doSell(account: string, currencyPair: CurrencyPair, quantity: number): void {
    console.log('SELL ' + account + ' ' + currencyPair + ' ' + quantity);

    const order: Order = {
      currencyPair: currencyPair,
      account: account,
      quantity: quantity,
      side: SELL
    };


    this.exchange.submit(order);
  }
}
