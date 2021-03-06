import {HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  windowDefaultWidth = 1920;
  windowDefaultWidthSmall = 1280;
  private windowNewWidth = window.innerWidth;
  private  windowWidthModifier = this.windowDefaultWidth / this.windowNewWidth;

  constructor() { }

  findComponentTriggerLocation(componentTriggerLocation: number): number {
    return (componentTriggerLocation - (this.windowDefaultWidth - this.windowNewWidth)) / this.windowWidthModifier;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
