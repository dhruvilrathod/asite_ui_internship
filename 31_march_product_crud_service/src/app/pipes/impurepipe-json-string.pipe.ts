import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurepipeJsonString',
  pure: false
})
export class ImpurepipeJsonStringPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
    if (args[0] == 'string'){
      var str = ``;
      var temp = JSON.parse(value);
      for(var key in temp) {
        str += `${key}:  ${temp[key]}\n`;
      }
      return str;
    }
    else if (args[0] == 'json') {
      var jsonObj = new Object(value);
      return JSON.stringify(jsonObj);
    }
    return null;
  }

}
