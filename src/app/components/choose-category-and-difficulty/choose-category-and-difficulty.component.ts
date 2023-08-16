import { Component, OnDestroy } from '@angular/core';
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
export class ChooseCategoryAndDifficultyComponent implements OnDestroy {
  // TODO les id
  public categories$: Observable<Category[]> = this._dataService.getCategory();
  public fiveQuestionQuizz: Quizz[] = [];

  public form: FormGroup = new FormGroup({
    category: new FormControl(null, Validators.required),
    difficulty: new FormControl(null, Validators.required),
  });

  public readonly DIFFICULTY_LEVELS = ['Easy', 'Medium', 'Hard'];

  private _destroy$ = new Subject();

  public constructor(private _dataService: DataService) {}

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public onClickSubmit(category: string, difficulty: string) {
    this._dataService
      .getQuizzTest(category, difficulty.toLocaleLowerCase())
      .pipe(takeUntil(this._destroy$))
      .subscribe((quizz: Quizz[]) => {
        this.fiveQuestionQuizz = quizz;
      });
  }
}
