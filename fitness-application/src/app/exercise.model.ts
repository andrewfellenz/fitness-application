import { Observable, Observer, timer } from "rxjs";

export class Exercise{


  constructor(

    private name: string,
    private targetReps: number,
    private breakTime: number,
    private description?: string,
    private targetSets?: number,
    private setsCompleted?: number,
    private repsPerSet?: number,
    private isSuperSet?: boolean,
    private repsCompleted?: number,
    private totalReps?: number[],
    private weightUsed?: number[],
    private includeBreakTimer?: boolean


  ){}




  completeSet() {
    if (this.includeBreakTimer) {
      this.startTimer();
    }
    //rep number selector becomes available
    // this.totalReps.push(this.repsCompleted);
    // this.setsCompleted += 1;

  }

  startTimer() {
    let timer = new Observable<number>((countDown: Observer<number>) => {
      setInterval(() => countDown.next(this.breakTime > 0 ? this.breakTime -= 1 : this.breakTime), 1000);
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

}
