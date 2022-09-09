import { IPlayNoSegregation } from './IPlayNoSegregation';

export class SoccerNoSegregation implements IPlayNoSegregation{
  kickTheBall(): string {
    return 'goal!!'
  }

  play(): string {
    return 'start!!'
  }
}