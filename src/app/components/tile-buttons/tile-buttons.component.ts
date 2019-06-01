import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afcs-tile-buttons',
  templateUrl: './tile-buttons.component.html',
  styleUrls: ['./tile-buttons.component.scss']
})
export class TileButtonsComponent implements OnInit {
  tileButtons: any[] = [
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

}
