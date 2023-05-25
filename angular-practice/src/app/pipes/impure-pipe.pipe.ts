import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure: false
})
export class ImpurePipePipe implements PipeTransform {

  transform(value: number[]): string {
    var str = '';
    for(var i =0; i< value.length; i++) {
      str+= `${value[i].toString()} `; 
    }
    return `Transformed from pure pipe: ${str}`;
  }

}
