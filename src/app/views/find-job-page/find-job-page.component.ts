import {AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'afcs-find-job-page',
  styleUrls: ['../../../styles/layouts/find-job-page.component.scss'],
  template: `
    <div class="find-job-page">
      <div class="find-job-page-animation">
        <afcs-under-construction [pageName]="'Find a Job Page'"></afcs-under-construction>
      </div>
      <div class="find-job-page-search">
        <h1>Find a job search</h1>
        <div class="find-job-page-input">
          <input type="text" [(ngModel)]="jobPosition">
          <button (click)="searchForJobs()">Search</button>
          <div class="find-job-page-list">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FindJobPageComponent implements OnInit {
  @Input() jobPosition: string;
  jobs = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  searchForJobs() {
    this.api.getJobs(this.jobPosition).subscribe((data: []) => {
      console.log(data);
      this.jobs = data;
      console.log(this.jobs);
    });
  }
}
