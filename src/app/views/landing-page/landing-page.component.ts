import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-landing-page',
  styleUrls: ['../../../styles/layouts/landing-page.component.scss'],
  template: `
    <div class="landing-page" [ngClass]="{'fold-video-in': foldVideo}">
      <iframe class="landing-page-video" 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/idMKHwRiDBc?modestbranding=1;autoplay=1&&loop=1&mute=1&enablejsapi=1&controls=0" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
    </div>
  `
})
export class LandingPageComponent implements OnInit {
  foldVideo = false;

  constructor(private router: Router, private windowService: WindowService) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  foldVideoIn() {
    this.foldVideo = true;
  }
}
