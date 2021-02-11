import { Exercise } from '../../exercise.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workout-view',
  templateUrl: './workout-view.component.html',
  styleUrls: ['./workout-view.component.scss']
})
export class WorkoutViewComponent implements OnInit {
  public exercise: Exercise;
  public exercise2: Exercise;
  public currentTime: any;
  public completeSetDisabled: boolean = false;
  public exerciseList: Exercise[] = [];




  constructor( ) {
    this.exercise = new Exercise("Benchpress", 10, 90, 4, 10, [150, 180, 200, 210]);
    this.exercise2 = new Exercise("Situps",10,90, 3,10,[0,0,0,0] )
    this.exerciseList.push(this.exercise);
    this.exerciseList.push(this.exercise2);

  }

  ngOnInit() {
  }

  onCompleteSet() {
    if (!this.completeSetDisabled) {
      this.currentTime  = this.exercise.startTimer();
      this.completeSetDisabled = true;
    }
  }
}
