import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';
import { ExercisesService } from 'src/app/services/exercises.service';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {

  @Input() exercise: Exercise = new Exercise('Test', 10, 90, 4, 0, [135, 155, 175, 205]);
  public currentTime: any;
  public completeSetDisabled: boolean = false;
  public targetSets: number = this.exercise.getTargetSets();
  public currentWeight: number = this.exercise.getWeightUsed();
  public targetReps: number = this.exercise.getTargetReps();
  public breakTime: number = this.exercise.getBreakTime();

  constructor(private exercisesService: ExercisesService) {
  }

  ngOnInit() {
    this.targetSets = this.exercise.getTargetSets();
    this.currentWeight = this.exercise.getWeightUsed();
    this.targetReps = this.exercise.getTargetReps();
    this.breakTime = this.exercise.getBreakTime();
  }

  saveData() {
    this.exercise.setTargetSets(this.targetSets);
    this.exercise.setWeightUsed(this.currentWeight);
    this.exercise.setTargetReps(this.targetReps);
    this.exercise.setBreakTime(this.breakTime);
    this.exercise.toggleEditMode();
  }

  onDelete() {
    this.exercisesService.deleteExerciseFromList(this.exercise);
  }
}
