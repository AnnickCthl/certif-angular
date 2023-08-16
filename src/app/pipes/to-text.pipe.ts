import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toText',
})
export class ToTextPipe implements PipeTransform {
  transform(text: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
  }
}
