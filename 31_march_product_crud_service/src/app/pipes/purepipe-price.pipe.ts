import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purepipePrice',
  pure: false
})
export class PurepipePricePipe implements PipeTransform {

  transform(value: number): string {
    var suffix1 = `#`;
    var suffix2 = `##`;
    if (value < 1000)
      return `${value} INR ${suffix1}`;
    else return `${value} INR ${suffix2}`;
  }

}
