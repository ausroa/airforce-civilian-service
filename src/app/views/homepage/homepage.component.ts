import {Component, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-homepage',
  styleUrls: ['../../../styles/layouts/homepage.component.scss'],
  template: `
    <div class="homepage-container">
      <section class="homepage-carousel">
        <afcs-homepage-carousel></afcs-homepage-carousel>
      </section>
      <section class="homepage-tile-btns">
        <afcs-tile-buttons></afcs-tile-buttons>
      </section>
      <section class="homepage-description1">
        <afcs-description1></afcs-description1>
      </section>
      <section class="homepage-slider">
        <afcs-slider></afcs-slider>
      </section>
      <section class="homepage-description2">
        <afcs-description2></afcs-description2>
      </section>
      <section class="homepage-video">
        <afcs-video></afcs-video>
      </section>
      <section class="homepage-description3">
        <afcs-description3></afcs-description3>
      </section>
      <section class="homepage-tile-btns2">
        <afcs-tile-buttons2></afcs-tile-buttons2>
      </section>
      <section class="homepage-register">
        <afcs-register></afcs-register>
      </section>
    </div>
  `
})
export class HomepageComponent implements OnInit {

  constructor(private ws: WindowService) {

  }

  ngOnInit() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }
}
