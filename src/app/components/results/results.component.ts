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
  answers: string[] = [];

  constructor(private _router: Router) {
    const pouet = this._router.getCurrentNavigation()?.extras.state;
    this.answeredFrom = pouet?.quizz;
    this.answers = pouet?.answers;
    console.log(pouet);
  }

  ngOnInit() {}
}
