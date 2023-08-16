import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ChooseCateroryAndDifficultyComponent } from './components/choose-category-and-difficulty/choose-caterory-and-difficulty.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // Components
    AppComponent,
    ChooseCateroryAndDifficultyComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
