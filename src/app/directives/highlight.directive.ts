import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  public constructor(private _el: ElementRef) {}

  @HostListener('mouseenter') public onMouseEnter() {
    this._highlight('aquamarine');
  }

  @HostListener('mouseleave') public onMouseLeave() {
    this._highlight('');
  }

  private _highlight(color: string) {
    this._el.nativeElement.style.backgroundColor = color;
  }
}
