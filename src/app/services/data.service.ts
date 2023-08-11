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
          
          console.log(obj);
          // obj.
          const prop: string[] = Object.getOwnPropertyNames(obj);

          if (prop.length === 1) {
            console.log('visdrdgmjo');

            //   this._mapCategory(obj['trivia_categories']);
            // pouet = obj.trivia_categories as Category[]; // TODO
            let pouet = obj[prop[0]]; // TODO
          }
          console.log('viscsqvcsdrdgmjo');
          // return pouet;
          return [];
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
