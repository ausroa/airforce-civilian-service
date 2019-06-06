import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afcs-contact-page',
  styleUrls: ['../../../styles/layouts/contact-page.component.scss'],
  template: `
    <div class="contact-page">
      <afcs-under-construction [pageName]="'Contact Page'"></afcs-under-construction>
    </div>
  `
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
