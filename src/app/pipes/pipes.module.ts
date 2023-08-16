import { NgModule } from '@angular/core';
import { ButtonClickedPipe } from './button-clicked.pipe';
import { ColorPipe } from './color.pipe';
import { ToTextPipe } from './to-text.pipe';

@NgModule({
  exports: [ButtonClickedPipe, ColorPipe, ToTextPipe],
  declarations: [ButtonClickedPipe, ColorPipe, ToTextPipe],
})
export class PipesModule {}
