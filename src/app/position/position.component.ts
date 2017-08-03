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
import {Currency, MAJOR_CURRENCIES} from '../finance-domain/Currency';
import {Position} from '../finance-domain/Position';
import {PositionManager} from '../finance-domain/PositionManager';

@Component({
  selector: 'app-position-component',
  styleUrls: ['position.component.css'],
  templateUrl: 'position.component.html',
})
export class PositionComponent implements OnInit {
  displayedColumns = ['account', 'currency', 'quantity'];
  positionSource: PositionDataSource | null;

  @ViewChild('filter') filter: ElementRef;

  constructor(private positionManager: PositionManager) {

  }

  ngOnInit() {
    this.positionSource = new PositionDataSource(this.positionManager);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.positionSource) { return; }
        this.positionSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class PositionDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private positionManager: PositionManager) {
    super();
  }

  connect(): Observable<Position[]> {
    const displayDataChanges = [
      this.positionManager.asPositionObservable(),
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.positionManager.getPositions().slice().filter((position: Position) => {
        const theString: string = this.filter.trim().toLowerCase().replace('/', '');
        const aString: string = position.currency.toString().toLowerCase().replace('/', '');
        return aString.indexOf(theString) !== -1;
      });
    });
  }

  disconnect() {}
}
