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
  public currentTime: any = 90;

  constructor() {
    this.exercise = new Exercise("Benchpress",10,90);



  }

  ngOnInit(): void {
  }
  onCompleteSet() {
    this.currentTime  = this.exercise.startTimer();
  }

}
