import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
