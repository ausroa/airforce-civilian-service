import {AfterContentChecked, AfterViewChecked, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {WindowService} from '../../services/window.service';
import {SwiperComponent} from 'angular2-useful-swiper';

@Component({
  selector: 'afcs-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
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
    if(this.mySwiper === undefined) {
      return;
    }
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
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
