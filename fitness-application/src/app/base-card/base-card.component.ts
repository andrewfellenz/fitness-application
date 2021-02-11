import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent implements OnInit {
  public exerciseList: number[] = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

  movies: string[] = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];


  popFunction() {
    this.movies.pop();
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.exerciseList, event.previousIndex, event.currentIndex);
  }
}
