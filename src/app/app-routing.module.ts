import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseCategoryAndDifficultyComponent } from './components/choose-category-and-difficulty/choose-category-and-difficulty.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseCategoryAndDifficultyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
