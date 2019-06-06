import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'afcs-about-page',
  styleUrls: ['../../../styles/layouts/about-page.component.scss'],
  template: `
    <div class="about-page">
      <afcs-under-construction [pageName]="'About Page'"></afcs-under-construction>
    </div>
  `
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
