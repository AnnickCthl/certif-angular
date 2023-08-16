import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'buttonClicked',
})
export class ButtonClickedPipe implements PipeTransform {
  transform(answer: string, question: number, formQuizz: FormGroup): string {
    debugger;
    return 'select-color';
  }
}
