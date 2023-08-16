import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quizz } from '../../models/quizz';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  answeredFrom: Quizz[] = [];
  userAnswers: string[] = [];

  constructor(private _router: Router) {
    const pouet = this._router.getCurrentNavigation()?.extras.state;
    this.answeredFrom = pouet?.quizz;
    this.userAnswers = pouet?.answers;
    console.log(pouet);

    this.userAnswers.filter(
      (ans, index) => ans === this.answeredFrom[index].correct_answer
    );
    console.log(
      this.userAnswers.filter(
        (ans, index) => ans === this.answeredFrom[index].correct_answer
      )
    );
  }

  ngOnInit() {}
}
