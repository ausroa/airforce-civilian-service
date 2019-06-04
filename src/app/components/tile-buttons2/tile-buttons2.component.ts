import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

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

  private componentTriggerY = 5276;

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
    console.log('Tile-buttons 2 Trigger LocationY:', this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  slideTiles2In() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.slideIn = true;
    }
  }
}
