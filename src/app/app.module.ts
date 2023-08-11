import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChooseCateroryAndDifficultyComponent } from './components/choose-caterory-and-difficulty/choose-caterory-and-difficulty.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    // Components
    AppComponent,
    ChooseCateroryAndDifficultyComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
