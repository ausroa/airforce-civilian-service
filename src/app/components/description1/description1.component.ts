import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-description1',
  templateUrl: './description1.component.html',
  styleUrls: ['./description1.component.scss']
})
export class Description1Component implements OnInit {
  startType = false;

  private componentTriggerY = 900;

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  startTyping() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.startType = true;
    }
  }
}
