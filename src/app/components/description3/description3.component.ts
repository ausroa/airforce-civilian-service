import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'afcs-description3',
  templateUrl: './description3.component.html',
  styleUrls: ['./description3.component.scss']
})
export class Description3Component implements OnInit {
  startType3 = false;

  constructor() { }

  ngOnInit() {
    console.log(window.pageYOffset);
  }

  @HostListener('window:scroll', ['$event'])
  startType() {
    const componentLocation = 4400;
    if(window.pageYOffset >= componentLocation) {
      this.startType3 = true;
    }
  }
}
