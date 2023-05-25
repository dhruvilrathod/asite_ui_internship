import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEmployeeRanking]'
})
export class EmployeeRankingDirective {

  @Input() appEmployeeRanking!: any;

  constructor(
    private _elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    document.getElementById(this.appEmployeeRanking[2])!.innerHTML = this._getRank(this.appEmployeeRanking[0], this.appEmployeeRanking[1]);
  }

  private _getRank(level: number, role: string): string {
    switch (level) {
      case 1:
        switch (role) {
          case 'Developer':
            return 'Medium'
            break;
          case 'Tester':
            return 'Low'
            break;
          case 'Dev Ops':
            return 'Medium'
            break;

          default:
            break;
        }
        break;
      case 2:
        switch (role) {
          case 'Developer':
            return 'Highest'
            break;
          case 'Tester':
            return 'Medium'
            break;
          case 'Dev Ops':
            return 'Medium'
            break;

          default:
            break;
        }
        break;
      case 3:
        switch (role) {
          case 'Developer':
            return 'Highest'
            break;
          case 'Tester':
            return 'Medium'
            break;
          case 'Dev Ops':
            return 'Highest'
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }
    return 'no rank'
  }
}
