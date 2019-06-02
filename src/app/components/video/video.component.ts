import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'afcs-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  startVideo = false;

  constructor() { }

  ngOnInit() {
    console.log('Video Location: ', window.pageYOffset);
  }

  @HostListener('window:scroll', ['$event'])
  showComponent() {
    const componentLocation = 3400;
    if(window.pageYOffset === componentLocation) {
      this.startVideo = true;
    }
  }
}
