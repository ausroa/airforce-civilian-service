import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-tile-buttons2',
  styleUrls: ['../../../styles/components/tile-buttons2.component.scss'],
  template: `
    <div *ngIf="slideIn" [ngClass]="{'reveal-tiles2-mid': slideIn}" class="tile-buttons2">
      <div *ngFor="let tile of tileButtons" class="tile-buttons2-btn">
        <div class="tile-buttons2-title">
          <p class="tile-buttons2-btn-text">{{tile.title}}</p>
          <div class="tile-buttons2-btn-line"></div>
        </div>
        <img class="tile-buttons2-img" src="{{tile.img}}" alt="">
      </div>
    </div>
  `
})
export class TileButtons2Component implements OnInit {
  tileButtons: any[] = [
    {title: 'News', img: 'assets/imgs/lowerNEWS.png'},
    {title: 'Events', img: 'assets/imgs/lowerEVENTS.png'}
  ];

  slideIn = false;

  private componentTriggerY = 5176;

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  slideTiles2In() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.slideIn = true;
    }
  }
}
