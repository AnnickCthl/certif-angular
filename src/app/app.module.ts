import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ChooseCategoryAndDifficultyComponent } from './components/choose-category-and-difficulty/choose-category-and-difficulty.component';
import { FiveQuestionsQuizzComponent } from './components/five-questions-quizz/five-questions-quizz.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './components/results/results.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    PipesModule,

    AppRoutingModule,
  ],
  declarations: [
    // Components
    AppComponent,
    ChooseCategoryAndDifficultyComponent,
    FiveQuestionsQuizzComponent,
    ResultsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
