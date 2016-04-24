import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First {{projectName}}</h1>
    <input [(ngModel)]="projectName">
    <button *ngIf="projectName" (click)="sayHello()">Hello</button>
  `
})
export class AppComponent {
  private projectName: string = 'Angular 2 App';

  sayHello() {
    console.log(`Hello ${this.projectName}!`);
  }
}
