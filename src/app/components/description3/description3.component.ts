import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-description3',
  templateUrl: './description3.component.html',
  styleUrls: ['../../../styles/components/description3.component.scss']
})
export class Description3Component implements OnInit {
  startType3 = false;

  constructor(private windowService: WindowService) { }

  private componentTriggerY = 4400;

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  startType() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.startType3 = true;
    }
  }
}
