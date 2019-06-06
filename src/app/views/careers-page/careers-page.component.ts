import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afcs-careers-page',
  styleUrls: ['../../../styles/layouts/careers-page.component.scss'],
  template: `
    <div class="careers-page">
      <afcs-under-construction [pageName]="'Careers Page'"></afcs-under-construction>
    </div>
  `
})
export class CareersPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
