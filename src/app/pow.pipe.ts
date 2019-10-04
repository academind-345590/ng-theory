import { Pipe, PipeTransform } from '@angular/core';

// возводит в стерень и добавляет строку впереди
@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {
  transform(value: any, powNumber: number = 1, str: string) {
    return str + Math.pow(value, powNumber);
  }

}