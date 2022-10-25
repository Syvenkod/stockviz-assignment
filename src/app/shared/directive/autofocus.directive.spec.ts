import { ElementRef } from '@angular/core';
import { AutofocusDirective } from './autofocus.directive';

let element: ElementRef;
describe('AutofocusDirective', () => {
  it('should create an instance', () => {
    const directive = new AutofocusDirective(element);
    expect(directive).toBeTruthy();
  });
});
