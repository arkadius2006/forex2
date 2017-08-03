import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {DataSource} from '@angular/cdk/table';
import {SpotTrade} from '../finance-domain/SpotTrade';
import {CurrencyPair, MAJOR_CURRENCY_PAIRS} from '../finance-domain/CurrencyPair';
import {BUY, SELL, Side} from '../finance-domain/Side';
import {CAPTURED} from '../finance-domain/TradeStatus';
import {TradeManager} from '../finance-domain/TradeManager';

@Component({
  selector: 'app-trade-component',
  styleUrls: ['trade.component.css'],
  templateUrl: 'trade.component.html',
})
export class TradeComponent implements OnInit {
  displayedColumns = ['account', 'side', 'currencyPair', 'quantity', 'rate', 'tradeDate', 'settlementDate', 'status'];
  historySource: TradeDataSource | null;

  @ViewChild('historyFilterCurrencyPair') filter: ElementRef;


  constructor(private tradeManager: TradeManager) {

  }

  ngOnInit() {
    this.historySource = new TradeDataSource(this.tradeManager);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.historySource) {
          return;
        }
        this.historySource.filter = this.filter.nativeElement.value;
      });
  }
}

export class TradeDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  constructor(private tradeManager: TradeManager) {
    super();
  }

  connect(): Observable<SpotTrade[]> {
    const displayDataChanges = [
      this.tradeManager.asTradeObservable(),
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.tradeManager.getTrades().slice().filter((trade: SpotTrade) => {
        const theString: string = this.filter.trim().toLowerCase().replace('/', '');
        const aString: string = trade.currencyPair.toString().toLowerCase().replace('/', '');
        return aString.indexOf(theString) !== -1;
      });
    });
  }

  disconnect() {
  }
}
