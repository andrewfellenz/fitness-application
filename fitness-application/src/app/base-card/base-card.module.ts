import { AddViewModule } from './add-view/add-view.module';
import { EditViewModule } from './edit-view/edit-view.module';
import { WorkoutViewModule } from './workout-view/workout-view.module';
import { BaseCardComponent } from './base-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [BaseCardComponent],
  imports: [
    CommonModule,
    DragDropModule,
    WorkoutViewModule,
    AddViewModule,
    EditViewModule
  ],
  exports: [
    BaseCardComponent
  ]
})
export class BaseCardModule { }
