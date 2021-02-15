import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddViewComponent } from './add-view/add-view.component';



@NgModule({
  declarations: [AddViewComponent],
  imports: [
    CommonModule
  ]
})
export class BaseCardModule { }
