import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {HeroesComponent} from './heroes.component';

import {HeroDetailComponent} from './hero-detail.component';

import {HeroService} from './hero.service';

import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

import {MarketComponent} from './forex/market.component';
import {PortfolioComponent} from './forex/portfolio.component';
import {HistoryComponent} from './forex/history.component';

// todo rename this file to forex module

@NgModule({
  declarations: [
    AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, MarketComponent, PortfolioComponent, HistoryComponent
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
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
