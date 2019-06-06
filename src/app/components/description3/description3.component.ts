import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-description3',
  styleUrls: ['../../../styles/components/description3.component.scss'],
  template: `
    <div class="description" [ngClass]="{'reveal-mid': startType3}">
      <div class="description-box">
        <h1 *ngIf="startType3" class="description-title">Lorem ipsum dolor sit.</h1>
        <div *ngIf="startType3" [ngClass]="{'slideOut': startType3}" class="description-line"></div>
        <div *ngIf="startType3" [ngClass]="{'css-typing': startType3}" class="description-text css-typing">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit adipisicing gor wert wer.</p>
          <p>Ad aliquam architecto at commodi consectetur corporis delectus commo ter ret ewer.</p>
          <p>dicta dignissimos eligendi eos eum excepturi facilis, harum id harum morw suda sa.</p>
          <p>labore neque officia officiis optio possimus quae quaerat quia optio wert dar sere</p>
          <p>quibusdam ratione reiciendis repellat repudiandae sed similique sed desr ser tea</p>
          <p>sit, totam unde voluptates!repellat repudiandae similique sed undere igno adon swa</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ersr saw ret</p>
          <p>ducimus earum eligendi enim, est exercitationem fugiat fugit harum hicrer bvd mnb</p>
          <p>id incidunt inventore, labore laudantium libero, magnam maxime modihic es bmv xes</p>
          <p>molestias nisi nobis officia rem repellendus sequi soluta totam voluptate wter ased</p>
          <p>voluptatem voluptatibus voluptatum. Id quis suscipit ullam exercitationem cret erat</p>
        </div>
        <div *ngIf="startType3" [ngClass]="{'slideOut': startType3}" class="description-line"></div>
      </div>
    </div>
  `,
})
export class Description3Component implements OnInit {
  startType3 = false;

  constructor(private windowService: WindowService) { }

  private componentTriggerY = 4100;

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  startType() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.startType3 = true;
    }
  }
}
