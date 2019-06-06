import {AfterContentChecked, AfterViewChecked, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {WindowService} from '../../services/window.service';
import {SwiperComponent} from 'angular2-useful-swiper';

@Component({
  selector: 'afcs-slider',
  styleUrls: ['../../../styles/components/slider.component.scss'],
  template: `
    <div class="swiper-container">
      <swiper *ngIf="slideUp" [config]="config" class="swiper" #usefulSwiper>
        <div class="swiper-wrapper">
          <div [ngClass]="{'slideUp': slideUp}" *ngFor="let slide of slides; index as i" class="swiper-slide" id="slide-{{i}}">
            <img class="swiper-slide-img" src="{{slide.url}}" alt="">
          </div>
        </div>
      </swiper>
      <div *ngIf="slideUp" class="swiper-bubbles">
        <span [ngClass]="{'active-img': i === activeSlideIndex}" class="swiper-bubbles-bubble" *ngFor="let bubble of slides; index as i" (click)="goToSlide(i)"></span>
      </div>
    </div>
  `,
})
export class SliderComponent implements OnInit, AfterViewChecked {
  slides: any[] = [
    {name: '', url: 'assets/imgs/Directed Energy.jpg'},
    {name: '', url: 'assets/imgs/home_1.jpg'},
    {name: '', url: 'assets/imgs/Directed Energy.jpg'},
    {name: '', url: 'assets/imgs/home_1.jpg'},
    {name: '', url: 'assets/imgs/Directed Energy.jpg'},
    {name: '', url: 'assets/imgs/home_1.jpg'}
  ];

  config: SwiperOptions = {
    autoplay: 3000, // Autoplay option having value in milliseconds
    initialSlide: 2, // Slide Index Starting from 0
    slidesPerView: 3, // Slides Visible in Single View Default is 1
    centeredSlides: true,
    effect: 'coverflow',
    grabCursor: true
  };

  slideUp = false;
  activeSlideIndex: number;

  @ViewChild('usefulSwiper') mySwiper: SwiperComponent;

  private componentTriggerY = 2000;

  constructor(private windowService: WindowService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);

    if(this.mySwiper === undefined) {
      return;
    }
  }

  ngAfterViewChecked() {
    if(this.mySwiper !== undefined) {
      this.activeSlideIndex = this.mySwiper.swiper.activeIndex;
      this.cd.detectChanges();
    }
  }

  @HostListener('window:scroll', ['$event'])
  showSwiper() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.slideUp = true;
    }
  }

  goToSlide(slide) {
    this.mySwiper.swiper.slideTo(slide);
  }
}
