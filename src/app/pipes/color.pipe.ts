import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 2) {
      return 'red-color';
    } else if (value < 4) {
      return 'yellow-color';
    }
    return 'green-color';
  }
}
