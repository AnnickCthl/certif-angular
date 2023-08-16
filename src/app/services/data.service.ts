import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Category } from '../models/category';
import { Quizz } from '../models/quizz';
import { RawQuizz } from '../models/raw/raw-quizz';

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

  public getQuizzTest(
    category: string,
    difficulty: string
  ): Observable<Quizz[]> {
    const quizzUrl: string =
      this.BASE_URL +
      'api.php?amount=5&category=' +
      category +
      '&difficulty=' +
      difficulty +
      '&type=multiple';
    console.log(quizzUrl);

    return this._httpClient.get<GenericObject<RawQuizz[]>>(quizzUrl).pipe(
      map((response: GenericObject<RawQuizz[]>) => {
        if (response && response['results']) {
          const results = response['results'] as RawQuizz[];
          const mapped: Quizz[] = [];

          // results.forEach((quizz: RawQuizz) => {
          //   mapped.push({
          //     correctAnswer: quizz.correct_answer,
          //     question: quizz.question,
          //     allAnswers: this._shuffleArray([
          //       ...quizz.incorrect_answers,
          //       quizz.correct_answer,
          //     ]),
          //   });
          // });

          results.forEach((quizz: RawQuizz) => {
            mapped.push(new Quizz(quizz));
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

  private _shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
