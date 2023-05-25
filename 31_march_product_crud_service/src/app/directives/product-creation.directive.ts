import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCreation]'
})
export class ProductCreationDirective {

  @HostBinding('style.background-color') bgColor !: string;

  @HostListener('change', ['$event'])
  public newBgColor(e: any) {
    switch (e.target.value) {
      case 'Mobile':
        this.bgColor = 'yellow'
        break;
      case 'Laptop':
        this.bgColor = 'yellowgreen'
        break;
      case 'Other':
        this.bgColor = 'aqua'
        break;
      default:
        break;
    }
  }
  constructor() { }

}
