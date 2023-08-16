import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString',
})
export class ToStringPipe implements PipeTransform {
  transform(index: number): string {
    return index.toString();
  }
}
