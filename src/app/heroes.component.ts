import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HEROES} from './mock-heroes';

@Component({
  selector: 'app-heroes',
  styleUrls: ['./app.component.css'],
  template: '<h2>My Heroes</h2>' +
  '<ul class="heroes">' +
  '<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">' +
  '<span class="badge">{{hero.id}}</span>{{hero.name}}</li>' +
  '</ul>' +
  '<app-hero-detail [hero]="selectedHero"></app-hero-detail>',
  providers: []
})

export class HeroesComponent implements OnInit {
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
