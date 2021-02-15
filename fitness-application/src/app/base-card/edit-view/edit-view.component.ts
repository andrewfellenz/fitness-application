import { PrimeNGConfig } from 'primeng/api';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  private exerciseList: Exercise[] = [];
  //@ViewChild('targetSets') targetSets: ElementRef;
  public targetSets: number = this.exercise.getTargetSets();
  public currentWeight: number = this.exercise.getWeightUsed();
  public targetReps: number = this.exercise.getTargetReps();
  public breakTime: number = this.exercise.getBreakTime();

  constructor(private exercisesService: ExercisesService) {
    this.exerciseList = this.exercisesService.getExerciseList()

  }

  ngOnInit() {
    this.targetSets = this.exercise.getTargetSets();
    this.currentWeight = this.exercise.getWeightUsed();
    this.targetReps = this.exercise.getTargetReps();
    this.breakTime = this.exercise.getBreakTime();
  }

  onCompleteSet() {
    if (!this.completeSetDisabled) {
      this.currentTime  = this.exercise.startTimer();
      this.completeSetDisabled = true;
    }
  }

  saveData() {
    this.exercise.setTargetSets(this.targetSets);
    this.exercise.setWeightUsed(this.currentWeight);
    this.exercise.setTargetReps(this.targetReps);
    this.exercise.setBreakTime(this.breakTime);

  }

  onDelete() {

  }
}
