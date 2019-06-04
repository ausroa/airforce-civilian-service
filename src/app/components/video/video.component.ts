import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  startVideo = false;

  private componentTriggerY = 3500;

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
    console.log('Video Trigger LocationY:', this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  showComponent() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.startVideo = true;
    }
  }
}
