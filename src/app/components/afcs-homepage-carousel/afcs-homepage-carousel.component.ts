import {AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'afcs-homepage-carousel',
  styleUrls: ['../../../styles/components/afcs-homepage-carousel.component.scss'],
  template: `
    <div class="carousel-box">
      <img class="carousel-box-logo" src="assets/imgs/logo 2.png" alt="afcs_logo">
      <ngb-carousel class="carousel" [showNavigationArrows]="false" [showNavigationIndicators]="false" #carousel>
        <ng-template ngbSlide *ngFor="let img of homepageCarouselImgs; index as i">
          <img [src]="img.url" alt="carousel {{i}}">
        </ng-template>
      </ngb-carousel>
      <div class="carousel-text-box">
        <p class="carousel-text" *ngFor="let line of carouselText">{{line.text | uppercase}}</p>
        <div class="carousel-text-line"></div>
      </div>
      <span class="bubble"
            [ngClass]="{'active-img': pic.id === img.activeId}"
            *ngFor="let pic of homepageCarouselImgs"></span>
    </div>
  `
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
