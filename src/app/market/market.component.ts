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
import {Quote} from '../finance-domain/Quote';
import {MarketService} from './market-service';
import {CurrencyPair} from '../finance-domain/CurrencyPair';
import {AccountComponent} from '../account/account.component';

@Component({
  selector: 'app-market-component',
  styleUrls: ['market.component.css'],
  templateUrl: 'market.component.html',
})
export class MarketComponent implements OnInit {
  displayedColumns = ['currencyPair', 'bid', 'ask', 'timestamp'];
  exampleDatabase;
  marketSource: ExampleDataSource | null;

  @ViewChild('currencyPair') yourCurrencyPairFilter: ElementRef;

  @ViewChild('yourAccount') yourAccountComponent: AccountComponent;

  @ViewChild('yourQuantity') yourQuantityElement: ElementRef;

  constructor(private marketService: MarketService) {
    this.exampleDatabase = new ExampleDatabase(marketService);
  }

  ngOnInit() {
    this.marketSource = new ExampleDataSource(this.exampleDatabase);
    Observable.fromEvent(this.yourCurrencyPairFilter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.marketSource) {
          return;
        }
        this.marketSource.filter = this.yourCurrencyPairFilter.nativeElement.value;
      });
  }

  onBuyButtonClicked(): void {
    console.log('Buy');

    console.log(this.yourAccountComponent);

    console.log(this.yourAccountComponent.get());

    // console.log('Selected account: ' + this.account.account)

    // get currency
    // get quantity
    // get account


    const yourCurrencyPair: CurrencyPair = CurrencyPair.lookup(this.yourCurrencyPairFilter.nativeElement.value);

    console.log(yourCurrencyPair);

    if (yourCurrencyPair === null) {
        console.log('Invalid currency pair');
        return;
    }

    const yourQuantity: string = this.yourQuantityElement.nativeElement.value;

    console.log('Your quantity is ' + yourQuantity);




  }

  onSellButtonClicked(): void {
    console.log('Sell');
  }
}

export class ExampleDatabase {
  dataChange: BehaviorSubject<Quote[]> = new BehaviorSubject<Quote[]>([]);
  promise: Promise<Quote[]>;

  get data(): Quote[] {
    return this.dataChange.value;
  }

  constructor(private marketService: MarketService) {
    this.initPromise();
  }

  private initPromise() {
    this.promise = this.marketService.getDelayedMarketPromise();
    this.promise.then(data => this.onMarketDataUpdate(data));
  }

  private onMarketDataUpdate(data: Quote[]): void {
    console.log('Received market data updated');
    this.dataChange.next(data);

    // ask for new promise!!! again...
    this.initPromise();
  }
}

export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  connect(): Observable<Quote[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._exampleDatabase.data.slice().filter((quote: Quote) => {
        const theString: string = this.filter.trim().toLowerCase().replace('/', '');
        const aString: string = quote.currencyPair.toString().toLowerCase().replace('/', '');
        return aString.indexOf(theString) !== -1;
      });
    });
  }

  disconnect() {
  }
}
