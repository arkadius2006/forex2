import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: '<h1>{{title}}</h1>' +
  '<app-heroes></app-heroes>'
})

export class AppComponent {
  title = 'arkady first angular app';
}
