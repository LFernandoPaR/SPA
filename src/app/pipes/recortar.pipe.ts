import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortar'
})
export class RecortarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.length > 143) {
      return value.substring(0, 143) + "...";
    } else {
      return value;
    }
  }

}
