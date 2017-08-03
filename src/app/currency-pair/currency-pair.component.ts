import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {CurrencyPair, MAJOR_CURRENCY_PAIRS} from "../finance-domain/CurrencyPair";
import {matchesElement} from "@angular/animations/browser/src/render/shared";

@Component({
  selector: 'app-currency-pair',
  templateUrl: 'currency-pair.component.html',
})
export class CurrencyPairComponent {
  currencyPairCtrl: FormControl;
  filteredCurrencyPairs: any;
  @ViewChild('inputField') inputField: ElementRef;
  currencyPairs = MAJOR_CURRENCY_PAIRS;

  constructor() {
    this.currencyPairCtrl = new FormControl();
    this.filteredCurrencyPairs = this.currencyPairCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterCurrencyPairs(name));

  }

  filterCurrencyPairs(name: any) {
    console.log(name);
     return this.currencyPairs;
  }

  public get(): string {
    return this.inputField.nativeElement.value;
  }

}

