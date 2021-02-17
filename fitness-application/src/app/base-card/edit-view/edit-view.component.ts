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
  public completeSetDisabled: boolean[] = [false];
  public targetSets: number;
  public weightUsed: number[];
  public currentIndex: number = 0;
  public targetReps: number;
  public breakTime: number;
  public currentSet: number;

  constructor(private exercisesService: ExercisesService) {
    this.targetSets = this.exercise.getTargetSets();
    this.weightUsed = [...this.exercise.getWeightUsedList()];
    this.targetReps = this.exercise.getTargetReps();
    this.breakTime = this.exercise.getBreakTime();
    this.currentSet = this.exercise.getCurrentSet();
  }

  ngOnInit() {
    this.targetSets = this.exercise.getTargetSets();
    this.weightUsed = [...this.exercise.getWeightUsedList()];
    this.targetReps = this.exercise.getTargetReps();
    this.breakTime = this.exercise.getBreakTime();
  }

  saveData() {
    this.exercise.setTargetSets(this.targetSets);
    this.exercise.setWeightUsed(this.weightUsed);
    this.exercise.setTargetReps(this.targetReps);
    this.exercise.setBreakTime(this.breakTime);
    this.exercise.toggleEditMode();
  }

  onDelete() {
    this.exercisesService.deleteExerciseFromList(this.exercise);
  }
}
