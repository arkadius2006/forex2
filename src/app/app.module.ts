import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {HeroesComponent} from './heroes.component';

import {HeroDetailComponent} from './hero-detail.component';

import {HeroService} from './hero.service';

import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      }])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
