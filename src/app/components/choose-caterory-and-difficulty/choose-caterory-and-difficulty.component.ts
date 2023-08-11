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

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    console.log('coucou');
    this.categories$ = this._dataService.getCategory();

    this.categories$.subscribe((pouet) => console.log(pouet));
  }
}
