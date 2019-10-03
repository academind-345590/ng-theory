import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive ({
  selector: '[appBackground]',
})

export class BackgroundDirective implements OnInit {

  @HostListener('mouseenter') mouseEnter(){
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', 'red');
    this.renderer.addClass(nativeElement, 'white-text')
  }

  @HostListener('mouseleave') mouseLeave(){
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
    this.renderer.removeClass(nativeElement, 'white-text')
  }
  
  constructor(private element: ElementRef, private renderer: Renderer2){}

  ngOnInit() {
    
  }
}