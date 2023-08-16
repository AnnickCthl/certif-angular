import { Pipe, PipeTransform } from '@angular/core';

// Todo rename
@Pipe({
  name: 'answerColor',
})
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
