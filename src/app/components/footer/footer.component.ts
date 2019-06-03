import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afcs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  homeLinks: any[] = [
    {title: 'News', url: ''},
    {title: 'Events', url: ''},
    {title: 'Videos', url: ''}
  ];

  aboutLinks: any[] = [
    {title: 'Acquisition Force', url: ''},
    {title: 'AFTAC', url: ''},
    {title: 'Diversity & Inclusion', url: ''},
    {title: 'Locations', url: ''},
    {title: 'History', url: ''},
    {title: 'AFCS Innovations', url: ''},
    {title: 'Video Gallery', url: ''},
    {title: 'Photo Gallery', url: ''},
  ];

  careerLinks: any[] = [
    {title: 'Occupations', url: ''},
    {title: 'Job App', url: ''},
    {title: 'Students & Recent Grads', url: ''},
    {title: 'Veterans', url: ''},
    {title: 'Military Spouses', url: ''},
    {title: 'Persons W/ Disabilities', url: ''},
    {title: 'Why AFCS', url: ''},
    {title: 'Work Life Balance', url: ''},
    {title: 'Training', url: ''},
    {title: 'Job Security', url: ''},
    {title: 'Opportunity', url: ''},
    {title: 'Benefits', url: ''},
  ];

  findJobLinks: any[] = [
    {title: 'Job Map', url: ''},
    {title: 'How To Apply', url: ''},
  ];

  contactUsLinks: any[] = [
    {title: 'Links', url: ''},
    {title: 'Legal', url: ''},
  ];

  socialLinks: any[] = [
    {title: 'Facebook', url: ''},
    {title: 'LinkedIn', url: ''},
    {title: 'Instagram', url: ''},
    {title: 'Twitter', url: ''},
    {title: 'Youtube', url: ''}
  ];

  lastColLinks: any[] = [
    {title: 'No FEAR Act', url: ''},
    {title: 'Privacy', url: ''},
    {title: 'Regulatory', url: ''},
    {title: 'Accessibility', url: ''},
    {title: 'USA.gov', url: ''},
  ];

  constructor() { }

  ngOnInit() {
  }

}
