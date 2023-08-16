import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Quizz } from '../../models/quizz';

@Component({
  selector: 'app-five-questions-quizz',
  templateUrl: './five-questions-quizz.component.html',
  styleUrls: ['./five-questions-quizz.component.css'],
})
export class FiveQuestionsQuizzComponent implements OnInit {
  @Input() public fiveQuestionQuizz: Quizz[] = [];

  formQuizz: FormGroup = new FormGroup({
    questionOne: new FormControl(''),
    questionTwo: new FormControl(''),
    questionThree: new FormControl(''),
    questionFour: new FormControl(''),
    questionFive: new FormControl(''),
  });

  constructor() {}

  ngOnInit() {}

  onClickSubmit(formQuizz: FormGroup) {
    // TODO
  }

  buildSelection(fiveQuestion: FormGroup) {}
}