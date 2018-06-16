import { Component } from '@angular/core';
import { population } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  results: any;

  constructor() {
    this.results = population;
  }
}
