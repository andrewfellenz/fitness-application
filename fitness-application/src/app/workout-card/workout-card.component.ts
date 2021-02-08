import { Exercise } from './../exercise.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss']
})
export class WorkoutCardComponent implements OnInit {
  public exercise: Exercise;
  public currentTime: any;
  public completeSetDisabled: boolean = false;

  constructor() {
    this.exercise = new Exercise("Benchpress", 10, 2);
  }

  ngOnInit() {
  }

  onCompleteSet() {
    if (!this.completeSetDisabled) {
      this.currentTime  = this.exercise.startTimer();
      this.completeSetDisabled = true;
    }
  }

  log() {
    console.log(this.currentTime);
  }
}
