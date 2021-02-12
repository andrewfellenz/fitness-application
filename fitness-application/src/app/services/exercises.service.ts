import { Injectable } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private exercisesList: Exercise[] = [
    new Exercise('Benchpress', 10, 90, 4, 0, [135, 155, 175, 205]),
    new Exercise('Sit Ups', 18, 60, 5, 0, [0, 0, 0, 0, 0]),
    new Exercise('Pull Ups', 8, 120, 3, 0, [0, 0, 0, 0, 0])
/*     private name: string,
    private targetReps: number,
    public breakTime: number,
    private targetSets: number,
    private repsPerSet: number,
    private weightUsed: number[], */


  ];


  getExerciseList() {
    return this.exercisesList;
  }

  constructor() { }
}
