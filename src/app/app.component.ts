import {Component, HostListener} from '@angular/core';
import {HOST} from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'afcs-root',
  styleUrls: ['../styles/layouts/app.component.scss'],
  template: `
    <div class="afcs-container">
      <header class="header">
        <afcs-nav-bar></afcs-nav-bar>
      </header>
      <section class="views">
        <router-outlet></router-outlet>
      </section>
      <footer class="afcs-footer">
        <afcs-footer></afcs-footer>
      </footer>
    </div>
  `,
})
export class AppComponent {
  title = 'airforce-civilian-service';
  showNavbar = false;
}
