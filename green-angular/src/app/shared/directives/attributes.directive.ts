import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[attributes]'
})
export class AttributesDirective {
  @Input() set attributes(newAttributes) {
    for (const attributeName in newAttributes) {
      if (attributeName) {
        const attributeValue = newAttributes[attributeName];
        if (attributeValue) {
          this.renderer.setAttribute(this.elementRef.nativeElement, attributeName, attributeValue);
        } else {
          this.renderer.removeAttribute(this.elementRef.nativeElement, attributeName);
        }
      }
    }
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }
}
