import { AfterContentInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements AfterContentInit {
  @Input() public appAutofocus: boolean | undefined;
  constructor(private element: ElementRef) { }

  public ngAfterContentInit(): void {
    setTimeout(()=> {
      this.element.nativeElement.focus();
    }, 2000)
  }
}
