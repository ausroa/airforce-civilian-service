import {AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'afcs-homepage-carousel',
  templateUrl: './afcs-homepage-carousel.component.html',
  styleUrls: ['./afcs-homepage-carousel.component.scss']
})
export class AfcsHomepageCarouselComponent implements AfterContentChecked, OnInit {
  @ViewChild('carousel') img: any;

  homepageCarouselImgs: any[] = [
    {url: 'assets/imgs/Directed Energy.jpg', id: 'ngb-slide-0'},
    {url: 'assets/imgs/home_1.jpg', id: 'ngb-slide-1'},
  ];

  carouselText: any[] = [
    {text: 'The Air Force'},
    {text: 'Research Laboratory'},
    {text: 'Lead. Discover. Develop. Deliver'}
  ];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.img.slides = {};
    this.img.slides.first = {};
    this.img.slides.last = {};
    if(this.img.slides.first.id === undefined) {
      this.img.slides.first.id = this.homepageCarouselImgs[0].id;
    }
    this.cd.detectChanges();
  }

  ngAfterContentChecked() {
    this.homepageCarouselImgs[0].id = this.img.slides.first.id;
    this.homepageCarouselImgs[1].id = this.img.slides.last.id;
  }
}
