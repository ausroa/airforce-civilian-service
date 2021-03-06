import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'afcs-description1',
  styleUrls: ['../../../styles/components/description1.component.scss'],
  template: `
    <div class="description" [ngClass]="{'reveal-mid': startType}">
      <div class="description-box">
        <h1 *ngIf="startType" class="description-title">Lorem ipsum dolor sit.</h1>
        <div *ngIf="startType" [ngClass]="{'slideOut': startType}" class="description-line"></div>
        <div *ngIf="startType" [ngClass]="{'css-typing': startType}" class="description-text">
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
          <p>Lorem ipsum dolor.</p>
        </div>
      </div>
    </div>
  `,
})
export class Description1Component implements OnInit {
  startType = false;

  private componentTriggerY = 800;

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    this.componentTriggerY = this.windowService.findComponentTriggerLocation(this.componentTriggerY);
  }

  @HostListener('window:scroll', ['$event'])
  startTyping() {
    if(window.pageYOffset >= this.componentTriggerY) {
      this.startType = true;
    }
  }
}
