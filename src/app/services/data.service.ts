import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Category } from '../models/category';
import { Quizz } from '../models/quizz';

export type GenericObject<T> = { [key: string]: T };
export type GenericAny<T> = T | T[] | GenericObject<T>;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public BASE_URL: string = 'https://opentdb.com/';

  public constructor(private _httpClient: HttpClient) {}

  public getCategory(): Observable<Category[]> {
    const categoryUrl: string = this.BASE_URL + 'api_category.php';

    return this._httpClient.get<GenericObject<Category[]>>(categoryUrl).pipe(
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

  public getFiveQuizzTest(/*category: string, difficulty: string*/): Observable<
    Quizz[]
  > {
    const quizzUrl: string =
      this.BASE_URL +
      'api.php?amount=5&category=11&difficulty=easy&type=multiple';
    console.log(quizzUrl);

    return (
      this._httpClient
        // .get<any>(quizzUrl) // TODO Enveler "any"
        .get<any>(
          'https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple'
        )
        .pipe(
          map((obj) => {
            console.log(obj);

            return [];
          }),
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return [];
          })
        )
    );

    // https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple
  }

  // TODO voir pour utiliser les PArtial tout ça tout ça
  // TODO gestion d'erreur
}
