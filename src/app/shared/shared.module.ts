import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmYNComponent } from './confirm-y-n/confirm-y-n.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [ConfirmYNComponent, MessageComponent],
  imports: [CommonModule],
  exports: [ConfirmYNComponent, MessageComponent],
})
export class SharedModule {}
