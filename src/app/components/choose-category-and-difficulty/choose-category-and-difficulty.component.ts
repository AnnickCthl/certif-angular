import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-choose-category-and-difficulty',
  templateUrl: './choose-category-and-difficulty.component.html',
  styleUrls: ['./choose-category-and-difficulty.component.css'],
})
export class ChooseCategoryAndDifficultyComponent implements OnInit {
  categories$: Observable<Category[]> = this._dataService.getCategory();

  form: FormGroup = new FormGroup({
    category: new FormControl(''),
    difficulty: new FormControl(''),
  });

  readonly difficultyLevels = ['Easy', 'Medium', 'Hard'];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    // ToDO si le temps => Validators
  }

  onClickSubmit(category: string, difficulty: string) {
    // TODO Validators
    this._dataService.getFiveQuizzTest();
  }
}
