import { NgModule } from '@angular/core';
import { AnswerColorPipe } from './answer-color.pipe';
import { MessageColorPipe } from './message-color.pipe';
import { ToTextPipe } from './to-text.pipe';

@NgModule({
  exports: [AnswerColorPipe, MessageColorPipe, ToTextPipe],
  declarations: [AnswerColorPipe, MessageColorPipe, ToTextPipe],
})
export class PipesModule {}
