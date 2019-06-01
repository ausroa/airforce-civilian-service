import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'afcs-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides: any[] = [
    {name: '', url: ''},
    {name: '', url: ''},
    {name: '', url: ''},
    {name: '', url: ''},
    {name: '', url: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  click(e) {
    console.log('mouse was clicked' , e.srcElement.id);
  }
}
