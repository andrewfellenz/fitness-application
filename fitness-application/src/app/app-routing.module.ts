import { WorkoutViewComponent } from './base-card/workout-view/workout-view.component';
import { EditViewComponent } from './base-card/edit-view/edit-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WorkoutViewComponent
  },
  {
    path: 'workout', 
    component: WorkoutViewComponent
  },
  {
    path: 'edit',
    component: EditViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
