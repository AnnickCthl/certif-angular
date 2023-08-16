import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  public constructor(private _el: ElementRef) {}

  @HostListener('mouseenter') public onMouseEnter(): void {
    this._highlight('aquamarine');
  }

  @HostListener('mouseleave') public onMouseLeave(): void {
    this._highlight('');
  }

  private _highlight(color: string): void {
    this._el.nativeElement.style.backgroundColor = color;
  }
}
