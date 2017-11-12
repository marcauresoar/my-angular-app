import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let newString = '';
    for(let i = value.length - 1; i >= 0; i--){
      newString += value[i];
    }
    return newString;
  }

}
