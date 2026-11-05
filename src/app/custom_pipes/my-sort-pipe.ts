import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort',
})
export class MySortPipe implements PipeTransform {

  transform(arr: number[]) {
    console.log('Sort pipe called...')
    return arr.sort((a, b) => a - b);
  }

}
