import {AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

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
export class AfcsHomepageCarouselComponent implements AfterViewChecked, OnInit {
  @ViewChild('carousel') img: NgbCarousel;

  homepageCarouselImgs: any[] = [
    {url: 'assets/imgs/Directed Energy.jpg', id: ''},
    {url: 'assets/imgs/home_1.jpg', id: ''},
  ];

  carouselText: any[] = [
    {text: 'The Air Force'},
    {text: 'Research Laboratory'},
    {text: 'Lead. Discover. Develop. Deliver'}
  ];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.homepageCarouselImgs[0].id = this.img.slides.first.id;
    this.homepageCarouselImgs[1].id = this.img.slides.last.id;

    this.img.slide.subscribe((slide) => {
      this.img.activeId = slide.current;
    });
    this.cd.detectChanges();
  }
}
