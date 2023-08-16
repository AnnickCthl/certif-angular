import { NgModule } from '@angular/core';
import { AnswerColorPipe } from './answer-color.pipe';
import { ColorPipe } from './color.pipe';
import { ToTextPipe } from './to-text.pipe';

@NgModule({
  exports: [AnswerColorPipe, ColorPipe, ToTextPipe],
  declarations: [AnswerColorPipe, ColorPipe, ToTextPipe],
})
export class PipesModule {}
