import { AfterContentInit, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {
  constructor(private matInput: MatInput) { }

  public ngOnInit(): void {
    setTimeout(()=> {
      this.matInput.focus();
    }, 1500)
  }
}
