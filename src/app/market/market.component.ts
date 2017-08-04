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
import {MockExchange} from '../finance-domain/MockExchange';
import {ForgeMarketManager} from '../finance-domain/ForgeMarketManager';

@Component({
  selector: 'app-market-component',
  styleUrls: ['market.component.css'],
  templateUrl: 'market.component.html',
})

export class MarketComponent implements OnInit {
  displayedColumns = ['currencyPair', 'bid', 'ask', 'timestamp'];
  marketSource: MarketDataSource | null;

  @ViewChild('yourCurrencyPair') yourCurrencyPairComponent: ElementRef;

  constructor(private marketManager: ForgeMarketManager, private exchange: MockExchange) {
  }

  ngOnInit() {
    this.marketSource = new MarketDataSource(this.marketManager);

    Observable.fromEvent(this.yourCurrencyPairComponent.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.marketSource) {
          return;
        }
        this.marketSource.filter = this.yourCurrencyPairComponent.nativeElement.value;
      });
  }
}

export class MarketDataSource extends DataSource<any> {
  private filterChange = new BehaviorSubject('');

  constructor(private marketManager: ForgeMarketManager) {
    super();
  }

  get filter(): string {
    return this.filterChange.value;
  }

  set filter(filter: string) {
    this.filterChange.next(filter);
  }


  connect(): Observable<Quote[]> {
    const displayDataChanges = [
      this.marketManager.asMarketObservable(),
      this.filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.marketManager.getMarket().slice().filter((quote: Quote) => {
        const theString: string = this.filter.trim().toLowerCase().replace('/', '');
        const aString: string = quote.currencyPair.toString().toLowerCase().replace('/', '');
        return aString.indexOf(theString) !== -1;
      });
    });
  }

  disconnect() {
  }
}
