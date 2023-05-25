import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureFruit'
})
export class PureFruitPipe implements PipeTransform {

  transform(value: number): string {
    console.log(value);
    switch (value) {
      case 10:
        return `<span style="font-family:console; background-color:red">${value} %</span>`
        break;
      case 20:
        return `<span style="font-family:console; background-color:yellow">${value} %</span>`
        break;
      case 50:
        return `<span style="font-family:console; background-color:lightyellow">${value} %</span>`
        break;
      case 70:
        return `<span style="font-family:console; background-color:blue">${value} %</span>`
        break;
      case 90:
        return `<span style="font-family:console; background-color:green">${value} %</span>`
        break;

      default:
        break;
    }
    return '';
  }

}
