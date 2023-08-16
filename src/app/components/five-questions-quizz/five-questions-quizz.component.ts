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
  @Input() public fiveQuestionQuizz: Quizz[] = [];

  formQuizz: FormGroup = new FormGroup({});
  backgroundButtonColor: string = '';

  constructor(private _router: Router) {}

  ngOnInit() {
    if (this.fiveQuestionQuizz) {
      this.fiveQuestionQuizz.forEach((quizz, index) => {
        this.formQuizz.addControl(
          index.toString(),
          new FormControl(null, Validators.required)
        );
      });
    }
  }

  onClickSubmit(formQuizz: FormGroup) {
    const state = {
      quizz: this.fiveQuestionQuizz,
      answers: formQuizz.getRawValue(),
    };

    this._router.navigateByUrl('/results', {
      state: state,
    });
  }

  onAnwserClick(answer: string, index: number) {
    this.formQuizz.get(index.toString())?.patchValue(answer);
  }

  isSelected(answer: string, index: number): boolean {
    return this.formQuizz.get(index.toString())?.value === answer;
  }
}

// TODO Cacher l'input
// Encodage des réponses
