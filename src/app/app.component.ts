import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';
import {HEROES} from './mock-heroes';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: '<h1>{{title}}</h1>' +
  '<h2>My Heroes</h2>' +
  '<ul class="heroes">' +
  '<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">' +
  '<span class="badge">{{hero.id}}</span>{{hero.name}}</li>' +
  '</ul>' +
  '<hero-detail [hero]="selectedHero"></hero-detail>',
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  title = 'arkady first angular app';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroesPromise(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  ngOnInit(): void {
    const promise = this.getHeroesPromise();
    promise.then(data => this.heroes = data);
  }
}
