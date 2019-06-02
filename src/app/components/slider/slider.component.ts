import {AfterViewInit, Component, ContentChild, ElementRef, HostListener, OnInit, ViewChild, ViewRef} from '@angular/core';
import {SwiperComponent} from 'angular2-useful-swiper';

@Component({
  selector: 'afcs-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slides: any[] = [
    {name: '', url: 'assets/imgs/Directed Energy.jpg', id: 1},
    {name: '', url: 'assets/imgs/home_1.jpg', id: 2},
    {name: '', url: 'assets/imgs/Directed Energy.jpg', id: 3},
    {name: '', url: 'assets/imgs/home_1.jpg', id: 4},
    {name: '', url: 'assets/imgs/Directed Energy.jpg', id: 5},
    {name: '', url: 'assets/imgs/home_1.jpg', id: 6}
  ];

  config: SwiperOptions = {
    autoplay: 3000, // Autoplay option having value in milliseconds
    initialSlide: 3, // Slide Index Starting from 0
    slidesPerView: 3, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    centeredSlides: true,
    effect: 'coverflow',
    grabCursor: true
  };

  slideUp = false;

  @ViewChild('swiper') swiper: any;

  @HostListener('window:scroll', ['$event'])
  showSwiper() {
    const componentLocation = 1500;
    const windowLocation = window.pageYOffset;

    if(windowLocation === componentLocation) {
      this.slideUp = true;
    }
  }

  constructor() { }

}
