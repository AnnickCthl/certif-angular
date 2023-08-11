import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-choose-caterory-and-difficulty',
  templateUrl: './choose-caterory-and-difficulty.component.html',
  styleUrls: ['./choose-caterory-and-difficulty.component.css'],
})
export class ChooseCateroryAndDifficultyComponent implements OnInit {
  categories$: Observable<Category[]> = this._dataService.getCategory();

  readonly difficultyLevels = ['Easy', 'Medium', 'Hard'];

  constructor(private _dataService: DataService) {}

  ngOnInit() {}

  onClick() {
    // console.log(document.getElementById('difficultySelect')?.value);
    // console.log(document.getElementById("categorySelect")?.value);
    // console.log('click');
  }
}
