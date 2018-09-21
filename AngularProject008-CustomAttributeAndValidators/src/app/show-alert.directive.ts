import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowAlert]'
})
export class ShowAlertDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
    renderer.setStyle(el.nativeElement, 'color', 'blue');
    el.nativeElement.style.color = 'blue';
    el.nativeElement.style.fontSize = '14pt';
    renderer.listen(el.nativeElement, 'mouseover', function() {
       el.nativeElement.style.color = 'red';
       el.nativeElement.style.fontSize = '24pt';
    });
    renderer.listen(el.nativeElement, 'mouseout', function() {
       el.nativeElement.style.color = 'blue';
       el.nativeElement.style.fontSize = '14pt';
    });
    renderer.listen(el.nativeElement, 'click', function() {
       alert(el.nativeElement.innerText);
    });
   }
}
