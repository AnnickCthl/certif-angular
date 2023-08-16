import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'buttonClicked',
})
export class ButtonClickedPipe implements PipeTransform {
  transform(answer: string, question: number, formQuizz: FormGroup): string {
    const formValues = Object.values(formQuizz.getRawValue());

    return formValues[question] === answer ? 'select-color' : '';
  }
}
