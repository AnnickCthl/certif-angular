import { NgModule } from '@angular/core';
import { ButtonClickedPipe } from './button-clicked.pipe';

@NgModule({
  exports: [ButtonClickedPipe],
  declarations: [ButtonClickedPipe],
})
export class ButtonClickedPipeModule {}
