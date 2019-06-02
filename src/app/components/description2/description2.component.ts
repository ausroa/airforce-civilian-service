import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'afcs-description2',
  templateUrl: './description2.component.html',
  styleUrls: ['./description2.component.scss']
})
export class Description2Component implements OnInit {
  slideOut = false;

  constructor() { }

  ngOnInit() {
    console.log(window.pageYOffset);
  }

  @HostListener('window:scroll', ['$event'])
  slideOutLine() {
    const componentLocation = 2600;
    if(window.pageYOffset === componentLocation) {
      this.slideOut = true;
    }
  }
}
