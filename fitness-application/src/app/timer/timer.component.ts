import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  breakTime: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  timer = new Observable<number>((countDown: Observer<number>) => {
      setInterval(() => countDown.next(this.breakTime > 0 ? this.breakTime -= 1 : this.breakTime), 1000);
  });
}
