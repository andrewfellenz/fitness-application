import { Exercise } from '../models/exercise.model';
import { ExercisesService } from './../services/exercises.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragStart, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})

export class BaseCardComponent implements OnInit {
  public exercisesList: Exercise[];
  private bodyElement: HTMLElement = document.body;

  constructor(private exercisesService: ExercisesService) { 
    this.exercisesList = exercisesService.getExerciseList();
  }

  ngOnInit(): void {
  }

  dragStart(event: CdkDragStart) {
    this.bodyElement.classList.add('inheritCursors');
    this.bodyElement.style.cursor = 'grabbing';
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.exercisesList, event.previousIndex, event.currentIndex);
    this.bodyElement.classList.remove('inheritCursors');
    this.bodyElement.style.cursor = 'unset';
  }
}
