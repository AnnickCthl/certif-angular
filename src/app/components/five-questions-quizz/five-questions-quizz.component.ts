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

  ngOnInit() {}

  onClickSubmit(formQuizz: FormGroup) {
    // TODO
  }

  onAnwserClick(event: any) {
    console.log(event);
  }

  buildSelection(fiveQuestion: FormGroup) {}
}
