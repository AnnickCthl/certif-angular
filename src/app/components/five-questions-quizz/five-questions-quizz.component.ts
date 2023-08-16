import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Quizz } from '../../models/quizz';

@Component({
  selector: 'app-five-questions-quizz',
  templateUrl: './five-questions-quizz.component.html',
  styleUrls: ['./five-questions-quizz.component.css'],
})
export class FiveQuestionsQuizzComponent implements OnInit {
  //TODO Highlight
  @Input() public fiveQuestionQuizz: Quizz[] = [];

  public formQuizz: FormGroup = new FormGroup({});
  public backgroundButtonColor: string = '';

  public constructor(private _router: Router) {}

  public ngOnInit() {
    if (this.fiveQuestionQuizz) {
      this.fiveQuestionQuizz.forEach((quizz, index) => {
        this.formQuizz.addControl(
          index.toString(),
          new FormControl(null, Validators.required)
        );
      });
    }
  }

  public onClickSubmit(formQuizz: FormGroup) {
    this._router.navigateByUrl('/results', {
      state: {
        quizz: this.fiveQuestionQuizz,
        answers: formQuizz.getRawValue(),
      },
    });
  }

  public onAnwserClick(answer: string, index: number) {
    this.formQuizz.get(index.toString())?.patchValue(answer);
  }

  public isSelected(answer: string, index: number): boolean {
    return this.formQuizz.get(index.toString())?.value === answer;
  }
}
