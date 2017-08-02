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

@Component({
  selector: 'app-history-component',
  styleUrls: ['history.component.css'],
  templateUrl: 'history.component.html',
})
export class HistoryComponent implements OnInit {
  displayedColumns = ['account', 'side', 'currencyPair', 'quantity', 'rate', 'tradeDate', 'settlementDate', 'status'];
  historySource: ExampleHistoryDataSource | null;

  @ViewChild('historyFilterCurrencyPair') filter: ElementRef;

  ngOnInit() {
    this.historySource = new ExampleHistoryDataSource();
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

export class ExampleHistoryDatabase {
  dataChange: BehaviorSubject<SpotTrade[]> = new BehaviorSubject<SpotTrade[]>([]);

  get data(): SpotTrade[] {
    return this.dataChange.value;
  }

  constructor() {


    for (let i = 0; i < 100; i++) {
      this.addTrade();
    }

  }

  private addTrade() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewTrade());
    this.dataChange.next(copiedData);
  }

  private createNewTrade(): SpotTrade {
    const maxIndex = MAJOR_CURRENCY_PAIRS.length;
    const randomIndex = Math.floor(Math.random() * maxIndex);
    const theCurrencyPair: CurrencyPair = MAJOR_CURRENCY_PAIRS[randomIndex];
    const theRate = Math.floor((Math.random() * 10000)) / 100;
    const randomBooleanIndex = Math.floor(Math.random() * 2);
    const theSide: Side = (randomBooleanIndex === 0) ? BUY : SELL;
    const theQuantity: number = Math.floor((Math.random() + 1) * 10) * 100;
    const theTradeDate: Date = new Date();

    // todo replace with business calendar logic T+2
    const theSettlementDate: Date = new Date(theTradeDate.getTime() + 2 * 24 * 60 * 60 * 1000);

    return {
      account: 'Seletsky',
      side: theSide,
      currencyPair: theCurrencyPair,
      quantity: theQuantity,
      rate: theRate,
      tradeDate: theTradeDate,
      settlementDate: theSettlementDate,
      status: CAPTURED
    };
  }
}

export class ExampleHistoryDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  private _exampleHistoryDatabase: ExampleHistoryDatabase;

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  constructor() {
    super();
    this._exampleHistoryDatabase = new ExampleHistoryDatabase();
  }

  connect(): Observable<SpotTrade[]> {
    const displayDataChanges = [
      this._exampleHistoryDatabase.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._exampleHistoryDatabase.data.slice().filter((trade: SpotTrade) => {
        const theString: string = this.filter.trim().toLowerCase().replace('/', '');
        const aString: string = trade.currencyPair.toString().toLowerCase().replace('/', '');
        return aString.indexOf(theString) !== -1;
      });
    });
  }

  disconnect() {
  }
}
