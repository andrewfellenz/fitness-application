import { Exercise } from 'src/app/models/exercise.model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-workout-view',
  templateUrl: './workout-view.component.html',
  styleUrls: ['./workout-view.component.scss']
})
export class WorkoutViewComponent implements OnInit {

  @Input() exercise: Exercise = new Exercise('Test', 10, 90, 4, 0, [135, 155, 175, 205]);
  public currentTime: any;
  public completeSetDisabled: boolean = false;


  constructor( ) {
  }

  ngOnInit() {
  }

  editMode() {
  
  }

  onCompleteSet() {
    if (!this.completeSetDisabled) {
      this.currentTime  = this.exercise.startTimer();
      this.completeSetDisabled = true;
    }
  }
}
