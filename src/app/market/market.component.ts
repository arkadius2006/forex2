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
import {CurrencyPair, MAJOR_CURRENCY_PAIRS} from '../finance-domain/CurrencyPair';
import {Quote} from '../finance-domain/Quote';

@Component({
  selector: 'app-market-component',
  styleUrls: ['market.component.css'],
  templateUrl: 'market.component.html',
})
export class MarketComponent implements OnInit {
  displayedColumns = ['currencyPair', 'bid', 'ask', 'timestamp'];
  exampleDatabase = new ExampleDatabase();
  marketSource: ExampleDataSource | null;

  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.marketSource = new ExampleDataSource(this.exampleDatabase);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.marketSource) { return; }
        this.marketSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class ExampleDatabase {
  dataChange: BehaviorSubject<Quote[]> = new BehaviorSubject<Quote[]>([]);
  get data(): Quote[] { return this.dataChange.value; }

  constructor() {
    let currencyPair;
    for (let i = 0; i < MAJOR_CURRENCY_PAIRS.length; i++) {
      currencyPair = MAJOR_CURRENCY_PAIRS[i];
      this.addQuote(currencyPair);
    }
  }


  private addQuote(currencyPair: CurrencyPair) {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewQuote(currencyPair));
    this.dataChange.next(copiedData);
  }

  private createNewQuote(currencyPair: CurrencyPair): Quote {
    return {
      currencyPair: currencyPair,
      bid: Math.floor(Math.random() * 10000) / 100,
      ask: Math.floor(Math.random() * 10000) / 100,
      timestamp: new Date()
    };
  }
}

export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

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

  disconnect() {}
}
