import { Observable, Observer, timer } from "rxjs";

export class Exercise{


  constructor(

    private name: string,
    private targetReps: number,
    public breakTime: number,
    private targetSets: number,
    private repsPerSet: number,
    private weightUsed: number[],
    private currentSet: number = 1,
    private setsCompleted?: number,
    private isSuperSet?: boolean,
    private repsCompleted?: number,
    private totalReps?: number[],
  ){}






  startTimer() {
    let timer = new Observable<number>((countDown: Observer<number>) => {
      let timeLeft = this.breakTime;
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
  increaseTargetSets() {
    this.targetSets = this.targetSets + 1;
  }

}
