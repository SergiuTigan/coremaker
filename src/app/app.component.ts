import { Component } from '@angular/core';
import { inject } from '@vercel/analytics';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  constructor() {
    inject();
  }
}
