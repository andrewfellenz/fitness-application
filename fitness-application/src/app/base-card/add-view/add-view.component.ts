import { ExercisesService } from './../../services/exercises.service';
import { Exercise } from './../../models/exercise.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.scss']
})
export class AddViewComponent implements OnInit {

  private exercise: Exercise;

  constructor(private exerciseService: ExercisesService) { 
    this.exercise = new Exercise('Default Exercise', 10, 90, 3, 0, [135, 135, 135, 135]);
    this.exercise.setEditMode(true);
  }

  ngOnInit(): void {
  }

  onCreate() {
    this.exerciseService.addExerciseToList(this.exercise);
  }

}
