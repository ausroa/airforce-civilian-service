import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'afcs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('1s', style({transform: 'translateY(0%)'}))
      ])
    ])
  ]
})
export class NavBarComponent implements OnInit {
  public links: any[];
  public isOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.links = [
      {linkName: 'Home', url: ''},
      {linkName: 'About', url: 'about'},
      {linkName: 'Careers', url: 'careers'},
      {linkName: 'Find A Job', url: 'find-a-job'},
      {linkName: 'Contact', url: 'contact'},
      {linkName: 'Social', url: 'social'}
    ];

    this.isOpen = false;

    $('.search-button').click(function() {
      $(this).parent().toggleClass('open');
    });
  }
}
