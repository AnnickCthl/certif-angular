import { Utils } from '../shared/utils';
import { RawQuizz } from './raw/raw-quizz';

// export interface Quizz {
//   correctAnswer: string;
//   question: string;
//   allAnswers: string[];
// }
// TODO mapper

export class Quizz {
  correctAnswer: string = '';
  question: string = '';
  allAnswers: string[] = [];

  public constructor(src: RawQuizz) {

    this.correctAnswer = src.correct_answer,
    this.question= src.question,
    this.allAnswers= Utils.shuffleArray([
      ...src.incorrect_answers,
      src.correct_answer,
    ]),
  }
}
