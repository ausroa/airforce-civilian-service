import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afcs-tile-buttons2',
  templateUrl: './tile-buttons2.component.html',
  styleUrls: ['./tile-buttons2.component.scss']
})
export class TileButtons2Component implements OnInit {
  tileButtons: any[] = [
    {title: 'News'},
    {title: 'Events'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
