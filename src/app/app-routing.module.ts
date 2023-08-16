import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseCategoryAndDifficultyComponent } from './components/choose-category-and-difficulty/choose-category-and-difficulty.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseCategoryAndDifficultyComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
