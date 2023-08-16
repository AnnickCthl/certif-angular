import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  answeredFrom: Quiz[] = [];
  userAnswers: string[] = [];

  constructor(private _router: Router) {
    const data = this._router.getCurrentNavigation()?.extras.state;
    this.answeredFrom = Object.values(data?.quiz);
    this.userAnswers = Object.values(data?.answers);
  }

  getNumberOfCorrectAwswers(): number {
    return this.userAnswers.filter((ans: string, index: number) => {
      return ans === this.answeredFrom[index].correctAnswer;
    }).length;
  }

  onNavBack(): void {
    this._router.navigate(['']);
  }
}
