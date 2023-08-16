import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonClicked',
})
export class ButtonClickedPipe implements PipeTransform {
  transform(value: any, args?: any): string {
    return 'select-color';
  }
}
