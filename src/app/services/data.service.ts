import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Category } from '../models/category';

export type GenericObject<T> = { [key: string]: T };
export type GenericAny<T> = T | T[] | GenericObject<T>;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public CATEGORY_URL: string = 'https://opentdb.com/api_category.php';

  public constructor(private _httpClient: HttpClient) {}

  public getCategory(): Observable<Category[]> {
    return this._httpClient
      .get<GenericObject<Category[]>>(`${this.CATEGORY_URL}`) // TODO Enveler "any"
      .pipe(
        map((obj) => {
          const prop: string[] = Object.getOwnPropertyNames(obj);

          if (prop.length === 1) {
            let categories = obj[prop[0]]; // TODO

            return categories;
          }

          return [];
        })
      );
  }
}
