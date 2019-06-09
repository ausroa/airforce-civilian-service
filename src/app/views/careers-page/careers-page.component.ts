import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'afcs-careers-page',
  styleUrls: ['../../../styles/layouts/careers-page.component.scss'],
  template: `
    <div class="careers-page">
      <afcs-under-construction class="careers-animation" [pageName]="'Careers Page'"></afcs-under-construction>
    </div>
    <div class="careers-title">
      <h1>Careers</h1>
    </div>
    <div class="careers">
      <div class="list-group careers-list">
        <div *ngFor="let job of allAFJobs" class="list-group-item careers-list-item">
          <p>
            <span>{{job.MatchedObjectDescriptor.PositionTitle}}</span>
            <br>
            <small>POSTED: {{job.MatchedObjectDescriptor.PublicationStartDate}}</small>
            <br>
            <br>
            <span>{{job.MatchedObjectDescriptor.QualificationSummary}}</span>
            <br>
            <br>
            <span *ngFor="let sal of job.MatchedObjectDescriptor.PositionRemuneration">Salary {{sal.RateIntervalCode}}: {{sal.MinimumRange}}</span>
          </p>
        </div>
      </div>
    </div>
  `
})
export class CareersPageComponent implements OnInit {
  allAFJobs = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.callForAllJobs();
  }

  callForAllJobs() {
    return this.api.getAllJobs().subscribe((data) => {
      this.allAFJobs = data.SearchResult.SearchResultItems;
      console.log('All Air Force Jobs:', this.allAFJobs);
    });
  }
}
