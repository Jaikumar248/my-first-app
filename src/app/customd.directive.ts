import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Validators } from '@angular/forms';

@Directive({
  selector: '[appCustomd]',

})
export class CustomdDirective implements Validators{
  

  constructor(e:ElementRef ) { 
   
    e.nativeElement.style.border="2px solid red"
    e.nativeElement.style.display="none"
  }

 

}
