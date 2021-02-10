import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/exercise.model';


@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {

  public exercise: Exercise;
  public currentTime: any;
  public completeSetDisabled: boolean = false;



  constructor() {
    this.exercise = new Exercise("Benchpress", 10, 90, 4, 10, [150, 180, 200, 210]);

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
