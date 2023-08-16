import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Quizz } from '../../models/quizz';
import { Category } from '../../models/category';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-choose-category-and-difficulty',
  templateUrl: './choose-category-and-difficulty.component.html',
  styleUrls: ['./choose-category-and-difficulty.component.css'],
})
export class ChooseCategoryAndDifficultyComponent implements OnInit, OnDestroy {
  categories$: Observable<Category[]> = this._dataService.getCategory();
  fiveQuestionQuizz: Quizz[] = [];

  form: FormGroup = new FormGroup({
    category: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required),
  });

  readonly difficultyLevels = ['Easy', 'Medium', 'Hard'];

  private _destroy$ = new Subject();

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    // ToDO si le temps => Validators
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  onClickSubmit(category: string, difficulty: string) {
    // TODO Validators
    this._dataService
      .getQuizzTest(category, difficulty.toLocaleLowerCase())
      .pipe(takeUntil(this._destroy$))
      .subscribe((quizz: Quizz[]) => {
        this.fiveQuestionQuizz = quizz;
      });
  }
}
