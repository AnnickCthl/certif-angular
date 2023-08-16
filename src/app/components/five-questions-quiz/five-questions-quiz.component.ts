import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-five-questions-quiz',
  templateUrl: './five-questions-quiz.component.html',
  styleUrls: ['./five-questions-quiz.component.css'],
})
export class FiveQuestionsQuizComponent {
  @Input()
  public get fiveQuestionQuiz(): Quiz[] {
    return this._fiveQuestionQuiz;
  }
  public set fiveQuestionQuiz(value: Quiz[]) {
    if (value) {
      this._fiveQuestionQuiz = value;

      // On refresh complètement le form en cas de nouvelles questions.
      this.formQuiz = new FormGroup({});
      this.fiveQuestionQuiz.forEach((quiz, index) => {
        this.formQuiz.addControl(
          index.toString(),
          new FormControl(null, Validators.required)
        );
      });
    }
  }

  public formQuiz: FormGroup = new FormGroup({});
  public backgroundButtonColor: string = '';

  private _fiveQuestionQuiz: Quiz[] = [];

  public constructor(private _router: Router) {}

  public onClickSubmit(formQuiz: FormGroup) {
    this._router.navigateByUrl('/results', {
      state: {
        quiz: this.fiveQuestionQuiz,
        answers: formQuiz.getRawValue(),
      },
    });
  }

  public onAnwserClick(answer: string, index: number) {
    this.formQuiz.get(index.toString())?.patchValue(answer);
  }

  public isSelected(answer: string, index: number): boolean {
    return this.formQuiz.get(index.toString())?.value === answer;
  }
}
