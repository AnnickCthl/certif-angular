import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    const state = this._route.snapshot.data;
    const pouet = this._router.getCurrentNavigation()?.extras.state;
    console.log(this._route);
    console.log(state);
    console.log(pouet);
  }
}
