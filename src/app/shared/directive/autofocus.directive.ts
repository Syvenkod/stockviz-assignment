import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterContentInit {
  @Input() public appAutofocus: boolean | undefined;
  constructor() { }

  public ngAfterContentInit(): void {
    // setTimeout(()=> {
    //   this.element.nativeElement.focus();
    // }, 500)
  }
}
