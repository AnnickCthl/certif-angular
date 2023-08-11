import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public CATEGORY_URL: string = 'https://opentdb.com/api_category.php';

  public constructor(private _httpClient: HttpClient) {}

  public getCategory(): Observable<Category[]> {
    return this._httpClient
      .get<Object>(`${this.CATEGORY_URL}`) // TODO Enveler "any"
      .pipe(
        map((obj) => {
          let pouet: Category[] = [];
          console.log(obj);
          debugger;
          // if(obj['trivia_categories']) {

          //   this._mapCategory(obj['trivia_categories']);
          // }
          // // pouet = obj['trivia_categories'] as Category[]; // TODO
          return pouet;
        })
      );
  }
  // private _mapCategory(obj): Category[] {
  //   console.log(obj);
  //   return [];
  // }

  // private _mapAisBase(src: AisBase[]): AisBase[] {
  //   const clones: AisBase[] = [];

  //   CloneUtils.defaultArray<AisBase>(src).forEach((value: AisBase) => {
  //     clones.push(new AisBase(value));
  //   });

  //   return clones;
  // }
}
