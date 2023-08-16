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
    this.answeredFrom = Object.values(pouet?.quizz);
    this.userAnswers = Object.values(pouet?.answers);

    if (
      this.userAnswers &&
      this.userAnswers.length &&
      this.answeredFrom &&
      this.userAnswers.length === this.answeredFrom.length
    ) {
      const pouet = this.userAnswers.filter((ans: string, index: number) => {
        return ans === this.answeredFrom[index].correct_answer;
      });
      console.log(pouet);
    }
  }

  ngOnInit() {}

  getNumberOfCorrectAwswers(): number {
    return this.userAnswers.filter((ans: string, index: number) => {
      return ans === this.answeredFrom[index].correct_answer;
    }).length;
  }
}
