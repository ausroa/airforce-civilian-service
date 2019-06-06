import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afcs-find-job-page',
  styleUrls: ['../../../styles/layouts/find-job-page.component.scss'],
  template: `
    <div class="find-job-page">
      <afcs-under-construction [pageName]="'Find a Job Page'"></afcs-under-construction>
    </div>
  `
})
export class FindJobPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
