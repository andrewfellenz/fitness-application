import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { EditViewComponent } from './edit-view.component';


@NgModule({
  declarations: [EditViewComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    EditViewComponent
  ],
})
export class EditViewModule { }
