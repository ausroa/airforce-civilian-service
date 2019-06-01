import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'afcs-description1',
  templateUrl: './description1.component.html',
  styleUrls: ['./description1.component.scss']
})
export class Description1Component implements OnInit {
  startType = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  startTyping() {
    const componentLocation = 700;
    if(window.pageYOffset === componentLocation) {
      this.startType = true;
    }
  }
}
