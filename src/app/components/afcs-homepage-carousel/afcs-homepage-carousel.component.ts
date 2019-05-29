import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'afcs-homepage-carousel',
  templateUrl: './afcs-homepage-carousel.component.html',
  styleUrls: ['./afcs-homepage-carousel.component.scss']
})
export class AfcsHomepageCarouselComponent implements OnInit {
  homepageCarouselImgs: any[] = [
    {url: 'assets/imgs/Directed Energy.jpg', id: 'ngb-slide-0'},
    {url: 'assets/imgs/home_1.jpg', id: 'ngb-slide-1'},
  ];

  @ViewChild('carousel') img: any;

  carouselText: any[] = [
    {text: 'The Air Force'},
    {text: 'Research Laboratory'},
    {text: 'Lead. Discover. Develop. Deliver'}
  ];

  constructor() { }

  ngOnInit() {
    if(this.img.activeId === undefined) {
      this.img.activeId = 'ngb-slide-0';
    }
  }

}
