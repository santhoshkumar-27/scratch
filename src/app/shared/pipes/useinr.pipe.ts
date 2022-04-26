import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'useinr'
})
export class UseinrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const [num, age] = args;
    console.log('santhoshkuar', num, age)
    return value * num;
  }

}
