import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablePaste]',
})
export class DisablePaste {

 @HostListener('copy', ['$event'])
  @HostListener('paste', ['$event'])
  onCopyOrPatse(event: any) {
    console.log('event ', event.type, event);
    event.preventDefault();
    // alert('Copy Paste is not supported')
  }

}
