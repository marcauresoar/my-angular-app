import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort(function(a, b) {
      return (a['name'] > b['name']) ? 1 : (a['name'] < b['name']) ? -1 : 0;
    });
  }

}
