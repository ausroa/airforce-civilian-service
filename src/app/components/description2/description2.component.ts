import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-description2',
  templateUrl: './description2.component.html',
  styleUrls: ['./description2.component.scss']
})
export class Description2Component implements OnInit {
  slideOut = false;

  constructor(private windowService: WindowService) { }

  private componentTriggerY = 2700;

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
    console.log('Description 2 Trigger LocationY:', this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  slideOutLine() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.slideOut = true;
    }
  }
}
