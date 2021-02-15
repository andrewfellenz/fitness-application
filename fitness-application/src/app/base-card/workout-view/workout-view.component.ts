import { Exercise } from 'src/app/models/exercise.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workout-view',
  templateUrl: './workout-view.component.html',
  styleUrls: ['./workout-view.component.scss']
})
export class WorkoutViewComponent {

  @Input() exercise: Exercise = new Exercise('Test', 10, 90, 4, 0, [135, 155, 175, 205]);
  public completeSetDisabled: boolean = false;
  public breakTime: number = this.exercise.getBreakTime();
  public timer: any;

  constructor() {
  }

  ngOnInit() {
  }

  editMode() {
  }

  onCompleteSet() {
    if (!this.completeSetDisabled) {
      this.timer = this.exercise.startTimer(this.breakTime);
      this.completeSetDisabled = true;
    }
  }
}
