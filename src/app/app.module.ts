import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {HeroesComponent} from './heroes.component';

import {HeroDetailComponent} from './hero-detail.component';

import {HeroService} from './hero.service';

import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

import {MarketComponent} from './market/market.component';
import {PositionComponent} from './position/position.component';
import {HistoryComponent} from './history/history.component';


import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdTableModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  StyleModule
} from '@angular/material';

import {CdkTableModule} from '@angular/cdk/table';
import {TableFilteringExample} from './example/table-filtering-example';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MarketService} from './market/market-service';
import {HttpModule} from '@angular/http';

// todo rename this file to forex module

@NgModule({
  declarations: [
    AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent,
    MarketComponent, PositionComponent, HistoryComponent, TableFilteringExample
  ],

  exports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdTableModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdCoreModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    CdkTableModule,
    StyleModule
  ],

  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'heroes',
          component: HeroesComponent
        },
        {
          path: 'market',
          component: MarketComponent
        },
        {
          path: 'position',
          component: PositionComponent
        },
        {
          path: 'history',
          component: HistoryComponent
        },
        {
          path: 'demo',
          component: TableFilteringExample
        }
      ]
    ),
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdTableModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdCoreModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    CdkTableModule,
    StyleModule,

    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [HeroService, MarketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
