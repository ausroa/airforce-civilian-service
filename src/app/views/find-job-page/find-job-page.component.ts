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
      <div class="find-job-page-input">
        <input type="text" [(ngModel)]="jobPosition">
        <button (click)="searchForJobs()">Search</button>
        <h1>Find a job search</h1>
      </div>
      <div class="find-job-page-search">
        <div class="find-job-page-list">
          <div class="list-group">
            <div *ngFor="let job of jobs" class="list-group-item">
              <p>
                <span class="job-title">{{job.MatchedObjectDescriptor.PositionTitle}}</span>
                <br>
                <span class="job-org">{{job.MatchedObjectDescriptor.OrganizationName}}</span>
                <br>
                <small class="job-post-date">POSTED: {{job.MatchedObjectDescriptor.PublicationStartDate}}</small>
                <br>
                <br>
                <span class="job-summary">Summary <br> {{job.MatchedObjectDescriptor.UserArea.Details.JobSummary}}</span>
                <br>
                <br>
                <span class="job-qual">Qualifications <br> {{job.MatchedObjectDescriptor.QualificationSummary}}</span>
              </p>
            </div>
          </div>
        </div>
        <p *ngIf="searchJobs">No Results Found</p>
      </div>
    </div>
  `
})
export class FindJobPageComponent implements OnInit {
  @Input() jobPosition: string;
  jobs = [];
  searchJobs = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  searchForJobs() {
    if(this.jobs.length > 0) {
      this.jobs = [];
    }
    return this.api.getJobs(this.jobPosition).subscribe((data) => {
      if(data.SearchResult.SearchResultItems.length === 0) {
        this.searchJobs = true;
      } else {
        this.searchJobs = false;
      }
      this.jobs = data.SearchResult.SearchResultItems.reverse();
      console.log(this.jobs);
    });
  }
}
