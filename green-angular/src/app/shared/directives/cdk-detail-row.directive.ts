import {Directive, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[cdkTableDetailRow]'
})
export class CdkDetailRowDirective {
  private row: any;
  private tRef: TemplateRef<any>;
  private opened: boolean;
  @Output() detailShown = new EventEmitter<boolean>();

  @HostBinding('class.expanded')
  get expended(): boolean {
    return this.opened;
  }

  @Input()
  set cdkDetailRow(value: any) {
    if (value !== this.row) {
      this.row = value;
    }
  }

  @Input('cdkDetailRowTpl')
  set template(value: TemplateRef<any>) {
    if (value !== this.tRef) {
      this.tRef = value;
    }
  }

  constructor(public vcRef: ViewContainerRef) { }

  @HostListener('click')
  onClick(): void {
    if (this.row) {
      this.toggle();
    }
  }

  toggle(): void {
    if (this.opened) {
      this.vcRef.clear();
    } else {
      this.render();
    }
    this.opened = this.vcRef.length > 0;
    this.detailShown.emit(this.opened);
  }

  private render(): void {
    this.vcRef.clear();
    if (this.tRef && this.row) {
      this.vcRef.createEmbeddedView(this.tRef, { $implicit: this.row });
    }
  }
}
