export class Exercise{
  private name: string;
  private description: string;
  private numSets: number;
  private repsPerSet: number;
  private totalReps: number = numSets * repsPerSet;
  private includeBreakTimer: boolean;
  private weight: number[];//make sure logic is there for number of sets/weight options
  private isSuperSet: boolean;
  private breakTime: number; // will be in seconds
  private setsCompleted: number;
  private repsCompleted: number;
  private amountCompleted: number = repsCompleted/totalReps

}
