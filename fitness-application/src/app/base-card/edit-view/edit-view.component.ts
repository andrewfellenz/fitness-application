import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';


@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {

  @Input() exercise: Exercise = new Exercise('Test', 10, 90, 4, 0, [135, 155, 175, 205]);
  public currentTime: any;
  public completeSetDisabled: boolean = false;



  constructor() {
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
