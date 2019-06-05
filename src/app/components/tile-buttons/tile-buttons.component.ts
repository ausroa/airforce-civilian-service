import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {WindowService} from '../../services/window.service';
import {Router} from '@angular/router';

@Component({
  selector: 'afcs-tile-buttons',
  templateUrl: './tile-buttons.component.html',
  styleUrls: ['../../../styles/components/tile-buttons.component.scss'],
})
export class TileButtonsComponent implements OnInit {
  tileButtons: any[] = [
    {title: 'dod lab day', url: 'assets/imgs/slidesDOBLabDay.png'},
    {title: 'directorates', url: 'assets/imgs/slidesDirectories.png'},
    {title: 'about us', url: 'assets/imgs/slidesAboutUs.png'},
    {title: 'opportunities', url: 'assets/imgs/slidesOppurtunities.png'},
    {title: 'contact', url: 'assets/imgs/slidesContact.png'}
  ];

  @ViewChild('tileButton') tileButton: any;

  showTiles = false;

  private componentTriggerY = 200;

  constructor(private windowService: WindowService, private router: Router) { }

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  showTileButtons() {
    if(window.pageYOffset > this.componentTriggerY) {
      this.showTiles = true;
    }
  }

  sendToPage(tile) {
    switch(tile.title) {
      case 'about us':
        this.router.navigate(['about']);
        this.windowService.scrollToTop();
        break;
      case 'contact':
        this.router.navigate(['contact']);
        this.windowService.scrollToTop();
    }
  }
}
