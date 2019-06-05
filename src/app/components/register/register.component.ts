import { Component, OnInit } from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerBtns: any[] = [
    {title: 'Register', url: ''},
    {title: 'Back to Top', url: ''}
  ];

  constructor(private windowService: WindowService) { }

  ngOnInit() {
  }

  scrollToTop(btn) {
    if(btn.title === 'Back to Top') {
      this.windowService.scrollToTop();
    }
  }
}
