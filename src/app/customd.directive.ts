import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomd]'
})
export class CustomdDirective implements OnInit {
  

  constructor( private element: ElementRef, private renderer: Renderer2) { 
   

  }
  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'backroundColor','#F194&A');
  }

}
