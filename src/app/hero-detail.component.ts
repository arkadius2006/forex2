import {Component} from '@angular/core';
import {Hero} from './app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<h2>{{hero.name}} details</h2>' +
  '<div>' +
  '{{hero.name}}' +
  ' - ' +
  '{{hero.id}}' +
  '</div>'
})

export class HeroDetailComponent {
  hero: Hero;
}
