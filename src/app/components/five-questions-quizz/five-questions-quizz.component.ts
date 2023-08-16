import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor() {}

  ngOnInit() {
    if (this.fiveQuestionQuizz) {
      this.fiveQuestionQuizz.forEach((quizz, index) => {
        this.formQuizz.addControl(index.toString(), new FormControl({}));
      });
    }
    // Déplacer
  }

  onClickSubmit(formQuizz: FormGroup) {
    // TODO
  }

  onAnwserClick(answer: string, index: number) {
    this.formQuizz.get(index.toString())?.patchValue(answer);
    console.log(this.formQuizz);
    // if (
    //   attribute.name &&
    //   this.attributeForm.get(attribute.name)?.value !== attribute.value
    // ) {
    //   this.attributeForm.get(attribute.name)?.patchValue(attribute.value);
    // }
  }

  isSelected(answer: string, index: number): boolean {
    this.formQuizz.get(index.toString());

    // return formValues[question] === answer
    true
  }
}
