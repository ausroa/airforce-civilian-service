import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'afcs-tile-buttons2',
  templateUrl: './tile-buttons2.component.html',
  styleUrls: ['./tile-buttons2.component.scss']
})
export class TileButtons2Component implements OnInit {
  tileButtons: any[] = [
    {title: 'News', img: 'assets/imgs/lowerNEWS.png'},
    {title: 'Events', img: 'assets/imgs/lowerEVENTS.png'}
  ];

  slideIn = false;

  constructor() { }

  ngOnInit() {
    console.log(window.pageYOffset);
  }

  @HostListener('window:scroll', ['$event'])
  slideTiles2In() {
    const componentLocation = 5276;
    if(window.pageYOffset >= componentLocation) {
      this.slideIn = true;
    }
  }
}
