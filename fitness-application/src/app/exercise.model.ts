export class Exercise{

  //exercise details
  private name: string;
  private description: string;

  //sets
  private targetSets: number;
  private setsCompleted: number;
  private repsPerSet: number;
  private isSuperSet: boolean;

  //reps
  private targetReps: number;
  private repsCompleted: number;
  private totalReps: number[] = [];
  private weightUsed: number[];//make sure logic is there for number of sets/weight options

  //timer
  private includeBreakTimer: boolean;
  private breakTime: number; // will be in seconds



  completeSet() {
    if (this.includeBreakTimer) {
      this.startTimer();
    }
    //rep number selector becomes available
    this.totalReps.push(this.repsCompleted);
    this.setsCompleted += 1;
    
  }

  startTimer() {

  }
}