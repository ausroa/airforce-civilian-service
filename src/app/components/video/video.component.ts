import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-video',
  styleUrls: ['../../../styles/components/video.component.scss'],
  template: `
    <div *ngIf="startVideo" class="video">
      <iframe class="video-player" src="https://www.youtube.com/embed/e8BFQj0-Dmc?autoplay=1&mute=1&enablejsapi=1&controls=0" frameborder="0" allow="encrypted-media;" allowfullscreen></iframe>
    </div>
  `
})
export class VideoComponent implements OnInit {
  startVideo = false;

  private componentTriggerY = 3500;

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  showComponent() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.startVideo = true;
    }
  }
}
