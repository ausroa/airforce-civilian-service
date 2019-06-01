import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'afcs-tile-buttons',
  templateUrl: './tile-buttons.component.html',
  styleUrls: ['./tile-buttons.component.scss'],
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

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  showTileButtons() {
    const tileButtonLocation = 200;
    const scrollPosition = window.pageYOffset;

    if(scrollPosition === tileButtonLocation) {
      this.showTiles = true;
    }
  }
}
