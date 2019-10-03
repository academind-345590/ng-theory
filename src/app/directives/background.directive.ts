import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive ({
  selector: '[appBackground]',
})

export class BackgroundDirective implements OnInit {
  
  constructor(private element: ElementRef, private renderer: Renderer2){}

  ngOnInit() {
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', 'aqua');
    this.renderer.addClass(nativeElement, 'white-text')
  }
}