import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ChooseCategoryAndDifficultyComponent } from './components/choose-category-and-difficulty/choose-category-and-difficulty.component';
import { FiveQuestionsQuizzComponent } from './components/five-questions-quizz/five-questions-quizz.component';
import { ToStringPipeModule } from './components/five-questions-quizz/pipes/to-string/to-string.module';
import { ButtonClickedPipeModule } from './components/five-questions-quizz/pipes/button-clicked/button-clicked.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Pipes
    ButtonClickedPipeModule,
    ToStringPipeModule,
  ],
  declarations: [
    // Components
    AppComponent,
    ChooseCategoryAndDifficultyComponent,
    FiveQuestionsQuizzComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
