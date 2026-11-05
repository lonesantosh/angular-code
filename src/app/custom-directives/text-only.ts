import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextOnly]',
})
export class TextOnly {

   @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    const value = target.value ?? '';
    const regex = /^[a-zA-Z]*$/;
    this.myBgColor = regex.test(value) ? 'lightgreen' : 'red';
  }

}
