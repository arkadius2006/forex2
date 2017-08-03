import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-account-component',
  templateUrl: 'account.component.html',
})
export class AccountComponent {
  accountCtrl: FormControl;
  filteredAccounts: any;
  @ViewChild('inputField') inputField: ElementRef;
  accounts = ACCOUNTS;



  constructor() {
    this.accountCtrl = new FormControl();
    this.filteredAccounts = this.accountCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterAccounts(name));

  }

  filterAccounts(val: string) {
    if (val) {
      val.trim().toLowerCase();
      return this.accounts.filter(
        s => s.toLowerCase()
          .trim()
          .replace('/', '')
          .indexOf(val.trim().toLowerCase()) >= 0);
    } else {
      return this.accounts;
    }

  }

  public get(): string {
    return this.inputField.nativeElement.value;
  }

}

const ACCOUNTS: string[] = [ // todo move to configuration
  'Arkady/UBS',
  'Arkady/DB',
  'Arkady/JPM',
  'Arkady/GS'
];
