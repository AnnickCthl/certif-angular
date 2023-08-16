import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Category } from '../models/category';
import { Quiz, RawQuiz } from '../models/quiz';

export type GenericObject<T> = { [key: string]: T };

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public BASE_URL: string = 'https://opentdb.com/';

  public constructor(private _httpClient: HttpClient) {}

  public getCategory(): Observable<Category[]> {
    const categoryUrl: string = this.BASE_URL + 'api_category.php';

    return this._httpClient.get<GenericObject<Category[]>>(categoryUrl).pipe(
      map((response: GenericObject<Category[]>) => {
        if (response && response['trivia_categories']) {
          return response['trivia_categories'];
        }

        return [];
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return [];
      })
    );
  }

  public getQuizTest(category: string, difficulty: string): Observable<Quiz[]> {
    const quizUrl: string =
      this.BASE_URL +
      'api.php?amount=5&category=' +
      category +
      '&difficulty=' +
      difficulty +
      '&type=multiple';
    console.log(quizUrl);

    return this._httpClient.get<GenericObject<RawQuiz[]>>(quizUrl).pipe(
      map((response: GenericObject<RawQuiz[]>) => {
        if (response && response['results']) {
          const results = response['results'] as RawQuiz[];
          const mapped: Quiz[] = [];

          results.forEach((quiz: RawQuiz) => {
            mapped.push(new Quiz(quiz));
          });

          return mapped;
        }
        return [];
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return [];
      })
    );
  }
}
