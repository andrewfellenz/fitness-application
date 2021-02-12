import { Exercise } from '../models/exercise.model';
import { ExercisesService } from './../services/exercises.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})

export class BaseCardComponent implements OnInit {
  public exercisesList: Exercise[];

  constructor(private exercisesService: ExercisesService) { 
    this.exercisesList = exercisesService.getExerciseList();
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.exercisesList, event.previousIndex, event.currentIndex);
  }
}
