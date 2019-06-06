import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afcs-social-page',
  styleUrls: ['../../../styles/layouts/social-page.component.scss'],
  template: `
    <div class="social-page">
      <afcs-under-construction [pageName]="'Social Page'"></afcs-under-construction>
    </div>
  `
})
export class SocialPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
