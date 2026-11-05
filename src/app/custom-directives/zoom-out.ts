import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomOut]',
})
export class ZoomOut {

   @HostBinding('style.transform')
  transform: string = 'scale(1)';

  @HostBinding('style.transition')
  transition: string = 'transform 0.3s ease';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.transform = 'scale(0.8)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.transform = 'scale(1)';
  }

}
