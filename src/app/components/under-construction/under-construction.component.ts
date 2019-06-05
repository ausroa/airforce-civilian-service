import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'afcs-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['../../../styles/components/under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {
  @Input() pageName: string;

  constructor() { }

  ngOnInit() {
  }

}
