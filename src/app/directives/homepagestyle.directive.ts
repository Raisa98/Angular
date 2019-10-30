import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHomepagestyle]'
})
export class HomepagestyleDirective implements OnInit{
  colors = ['#262626', '#808080', '#000000'];
  x = Math.floor(Math.random() * this.colors.length);

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'border-color', this.colors[this.x]);
  }


}
