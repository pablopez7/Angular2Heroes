import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',

  template: `
    <h1>{{title}}</h1>
  `,
  styleUrls: ['../assets/css/app.component.css']
})
export class HomeComponent {
  title = 'Eminence';
}