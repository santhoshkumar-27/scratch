import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(
    private el: ElementRef
    ) {
      // el.nativeElement.style.color = 'red';
      el.nativeElement.innerHTML = '';

      el.nativeElement.innerHTML = 'hi';
   }

}
