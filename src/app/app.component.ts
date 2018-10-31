import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animationsAll } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ animationsAll ]
})
export class AppComponent {
  title = 'Site';
  copyright = 'This is the copyright info';
  logo = 'faHome';

  prepareRoute(outlet: RouterOutlet) {
    return outlet;
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['fade'];
  }
}
