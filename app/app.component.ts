import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First {{projectName}}</h1>
    <input [(ngModel)]="projectName">
  `
})
export class AppComponent {
  private projectName: string = 'Angular 2 App';
}
