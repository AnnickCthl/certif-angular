import { Utils } from '../shared/utils';

export interface RawQuiz {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

export class Quiz {
  correctAnswer: string = '';
  question: string = '';
  allAnswers: string[] = [];

  public constructor(src: RawQuiz) {
    this.correctAnswer = src.correct_answer;
    this.question = src.question;
    this.allAnswers = Utils.shuffleArray([
      ...src.incorrect_answers,
      src.correct_answer,
    ]);
  }
}
