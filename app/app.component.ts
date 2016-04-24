import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>My First {{projectName}}</h1>'
})
export class AppComponent {
  private projectName: string = 'Angular 2 App';
}
