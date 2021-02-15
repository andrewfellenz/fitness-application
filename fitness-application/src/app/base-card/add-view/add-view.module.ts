import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { AddViewComponent } from './add-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddViewComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    AddViewComponent
  ],
})
export class AddViewModule { }
