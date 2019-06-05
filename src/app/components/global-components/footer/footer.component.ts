import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afcs-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="footer">
      <div class="footer-col1">
        <div class="footer-col1-box">
          <div class="home">
            <span>HOME</span>
            <div *ngFor="let link of homeLinks" class="home-links">
              <a href="">{{link.title}}</a>
            </div>
          </div>
          <div class="about">
            <span>ABOUT US</span>
            <div *ngFor="let link of aboutLinks" class="about-links">
              <a href="">{{link.title}}</a>
            </div>
            <div class="about-line"></div>
          </div>
        </div>
      </div>
      <div class="footer-col2">
        <div class="footer-col2-box">
          <div class="careers">
            <span>CAREERS</span>
            <div *ngFor="let link of careerLinks" class="careers-links">
              <a href="">{{link.title}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-col3">
        <div class="footer-col3-box">
          <div class="find-job">
            <span>FIND A JOB</span>
            <div *ngFor="let link of findJobLinks" class="find-job-links">
              <a href="">{{link.title}}</a>
            </div>
          </div>
          <div class="contact-us">
            <span>CONTACT US</span>
            <div *ngFor="let link of contactUsLinks" class="contact-us-links">
              <a href="">{{link.title}}</a>
            </div>
          </div>
          <div class="social">
            <span>SOCIAL</span>
            <div *ngFor="let link of socialLinks" class="social-links">
              <a href="">{{link.title}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-col4">
        <div class="footer-col4-box">
          <div class="last-col">
            <div *ngFor="let link of lastColLinks" class="last-col-links">
              <a href="">{{link.title}}</a>
            </div>
            <img class="last-col-img" src="assets/imgs/lowerMenuLogo.png" alt="">
            <div class="last-col-line"></div>
          </div>
        </div>
      </div>
      <div class="official-text">
        <p class="official-text-text">Official United States Air Force Website. The Air Force Civilian Service is an
          Equal Opportunity Employer</p>
      </div>
    </div>
    <div class="bottom-bar">
      <img class="bottom-bar-img" src="assets/imgs/foot.png" alt="">
    </div>
  `,
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
