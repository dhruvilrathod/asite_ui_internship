import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFruits]'
})
export class FruitsDirective implements OnInit {

  @Input() appFruits!: any;

  constructor(
    private _elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    document.getElementById(this.appFruits[2])!.innerHTML = this._getNutrition(this.appFruits[0], this.appFruits[1]);
  }

  private _getNutrition(nut: string, type: string): string {
    switch (nut) {
      case 'n1':
        switch (type) {
          case 'Dry':
            return `<span style="background-color: red">${nut}</span>`;
            break;
          case 'Juicy':
            return `<span style="background-color: yellow">${nut}</span>`;
            break;

          default:
            break;
        }
        break;
      case 'n2':
        switch (type) {
          case 'Dry':
            return `<span style="background-color: lightgreen">${nut}</span>`;
            break;
          case 'Juicy':
            return `<span style="background-color: lightblue">${nut}</span>`;
            break;

          default:
            break;
        }
        break;
      case 'n3':
        switch (type) {
          case 'Dry':
            return `<span style="background-color: green">${nut}</span>`;
            break;
          case 'Juicy':
            return `<span style="background-color: blue">${nut}</span>`;
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }
    return 'no nutritions'
  }

}
