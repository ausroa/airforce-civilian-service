import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'afcs-carousel-img',
  templateUrl: './carousel-img.component.html',
  styleUrls: ['./carousel-img.component.scss']
})
export class CarouselImgComponent implements OnInit {
  @Input() carouselImg: any;
  @Output() sendImgId = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


}
