import { NgModule } from '@angular/core';
import { ButtonClickedPipe } from './button-clicked.pipe';
import { ColorPipe } from './color.pipe';

@NgModule({
  exports: [ButtonClickedPipe, ColorPipe],
  declarations: [ButtonClickedPipe, ColorPipe],
})
export class PipesModule {}
