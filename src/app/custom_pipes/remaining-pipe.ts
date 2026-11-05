import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
})
export class RemainingPipe implements PipeTransform {


    transform(message: string, max_length: number = 100) {
    console.log('RemainingPipe called...');
    return max_length - message.length;
  }

}
