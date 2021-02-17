import { Observable, Observer, timer } from "rxjs";

export class Exercise{


  constructor(

    private name: string,
    private targetReps: number,
    private breakTime: number,
    private targetSets: number,
    private repsPerSet: number,
    private weightUsed: number[],
    private currentSet: number = 1,
    private sets: number[] = [1, 2, 3],
    private editMode: boolean = false,
    private setsCompleted?: number,
    private isSuperSet?: boolean,
    private repsCompleted?: number,
    private totalReps?: number[],
  ){}

  startTimer(breakTime: number) {
    let timer = new Observable<number>((countDown: Observer<number>) => {
      let timeLeft = breakTime;
      countDown.next(timeLeft);
      setInterval(() => countDown.next(timeLeft > 0 ? timeLeft -= 1 : timeLeft), 1000);
      console.log(countDown);
      setTimeout(() => countDown.complete(), timeLeft * 1000);
      setTimeout(() => console.log(countDown), timeLeft * 1000);
    });
    return timer;
  }

  getName() {
    return this.name;
  }

  getBreakTime() {
    return this.breakTime;
  }

  getTargetReps() {
    return this.targetReps;
  }

  getTargetSets() {
    return this.targetSets;
  }

  getRepsPerSet() {
    return this.repsPerSet;
  }

  getWeightUsed() {
    return this.weightUsed[this.currentSet -1];
  }

  getCurrentSet() {
    return this.currentSet;
  }

  getSetsCompleted() {
    return this.setsCompleted;
  }

  getSets() {
    return this.sets;
  }

  getIsSuperSet() {
    return this.isSuperSet;
  }

  getRepsCompleted() {
    return this.repsCompleted;
  }

  getTotalReps() {
    return this.totalReps;
  }

  getEditMode() {
    return this.editMode;
  }
  setName(name: string) {
    this.name = name;
  }

  setBreakTime(breakTime: number) {
    this.breakTime = breakTime;
  }

  setTargetReps(targetReps: number) {
    this.targetReps = targetReps;
  }

  setTargetSets(targetSets: number) {
    this.targetSets = targetSets;
  }

  setRepsPerSet(repsPerSet: number) {
    this.repsPerSet = repsPerSet;
  }

  setWeightUsed(weightUsed: number) {
    this.weightUsed[this.currentSet - 1] = weightUsed;
  }

  setCurrentSet(currentSet: number) {
    this.currentSet = currentSet;
  }

  setSetsCompleted(setsCompleted: number) {
    this.setsCompleted = setsCompleted;
  }

  setIsSuperSet(isSuperSet: boolean) {
    this.isSuperSet = isSuperSet;
  }

  setRepsCompleted(repsCompleted: number) {
    this.repsCompleted = repsCompleted;
  }

  setTotalReps(totalReps: number[]) {
    this.totalReps = totalReps;
  }

  setEditMode(editMode: boolean) {
    this.editMode = editMode;
  }

  increaseTargetSets() {
    this.targetSets = this.targetSets + 1;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
}
