import {Component} from '@angular/core';
import {Hero} from './hero';


const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'}
];

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: '<h1>{{title}}</h1>' +
  '<h2>My Heroes</h2>' +
  '<ul class="heroes">' +
  '<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">' +
  '<span class="badge">{{hero.id}}</span>{{hero.name}}</li>' +
  '</ul>' +
  '<hero-detail [hero]="selectedHero"></hero-detail>'
})

export class AppComponent {
  title = 'arkady first angular app';
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
