import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toText',
})
export class ToTextPipe implements PipeTransform {
  transform(text: string): string {
    return '';
  }
}
