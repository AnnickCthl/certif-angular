import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'answerColor',
})
// TODO TU
// TODO Directive
export class AnswerColorPipe implements PipeTransform {
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
