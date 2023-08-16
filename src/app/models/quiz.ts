/* eslint-disable @typescript-eslint/naming-convention */
import { Utils } from '../shared/utils';

export interface RawQuiz {
  // On déroge à la convention de nommage uniquement ici, pour typer la response
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

export class Quiz {
  public correctAnswer: string = '';
  public question: string = '';
  public allAnswers: string[] = [];

  public constructor(src: RawQuiz) {
    this.correctAnswer = src.correct_answer;
    this.question = src.question;
    this.allAnswers = Utils.shuffleArray([
      ...src.incorrect_answers,
      src.correct_answer,
    ]);
  }
}
