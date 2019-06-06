import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-register',
  styleUrls: ['../../../styles/components/register.component.scss'],
  template: `
    <div class="register" [ngClass]="{'reveal-mid': showComponent}">
      <div class="register-text-box">
        <p class="register-text">Register here and we'll keep you informed about the latest job openings.</p>
        <div *ngFor="let btn of registerBtns" class="register-btn" (click)="scrollToTop(btn)">{{btn.title}}</div>
      </div>
    </div>
  `,
})
export class RegisterComponent implements OnInit {
  registerBtns: any[] = [
    {title: 'Register', url: ''},
    {title: 'Back to Top', url: ''}
  ];

  constructor(private windowService: WindowService) { }

  private componentYTrigger = 5300;
  showComponent = false;

  ngOnInit() {
    this.componentYTrigger = this.windowService.findComponentTriggerLocation(this.componentYTrigger);
  }

  scrollToTop(btn) {
    if(btn.title === 'Back to Top') {
      this.windowService.scrollToTop();
    }
  }

  @HostListener('window:scroll', ['$event'])
  revealRegister() {
    if(window.pageYOffset >= this.componentYTrigger) {
      this.showComponent = true;
    }
  }
}
