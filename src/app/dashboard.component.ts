import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./app.component.css'],
  template: ' <h2>Dashboarddd</h2>'
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    const promise = this.heroService.getHeroesPromise();
    promise.then(data => this.heroes = data.slice(1, 2));
  }

}
