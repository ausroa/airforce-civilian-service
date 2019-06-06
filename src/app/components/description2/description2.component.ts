import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-description2',
  styleUrls: ['../../../styles/components/description2.component.scss'],
  template: `
    <div class="description2" [ngClass]="{'slide-mid': slideOut}">
      <div *ngIf="slideOut" class="description2-container">
        <p class="description2-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ducimus eos est et hic iste
          pariatur sequi similique? Assumenda doloremque, dolorum ducimus error esse incidunt, iusto
          mollitia quae, quasi rem reprehenderit tempora ut velit. Aut, nesciunt odio perferendis porro
          quaerat quod sunt! Cumque, natus officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, tempora?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorem, enim odio omnis sunt tenetur.
        </p>
      </div>
      <div *ngIf="slideOut" [ngClass]="{'slideOut': slideOut}" class="description2-line"></div>
    </div>
  `,
})
export class Description2Component implements OnInit {
  slideOut = false;

  constructor(private windowService: WindowService) { }

  private componentTriggerY = 2700;

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  slideOutLine() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.slideOut = true;
    }
  }
}
