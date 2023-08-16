import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

// Todo rename
@Pipe({
  name: 'buttonClicked',
})
export class ButtonClickedPipe implements PipeTransform {
  transform(answer: string, correctAnswer: string, userAnswer: string): string {
    if (answer === correctAnswer) {
      return 'green-color';
    }

    if (answer === userAnswer && answer !== correctAnswer) {
      return 'red-color';
    }
    return '';
  }
}
