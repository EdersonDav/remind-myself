import { IPlaySoccers } from './IPlaySegregation';

export class Soccer implements IPlaySoccers{
  kickTheBall(): string {
    return 'goal!!'
  }

  play(): string {
    return 'start!!'
  }

}
