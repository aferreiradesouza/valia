import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ng-progress color="#f79d00"></ng-progress>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackathon-valia-web';
}
