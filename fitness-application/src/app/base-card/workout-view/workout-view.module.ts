import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { WorkoutViewComponent } from './workout-view.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WorkoutViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    WorkoutViewComponent
  ],
})
export class WorkoutViewModule { }
