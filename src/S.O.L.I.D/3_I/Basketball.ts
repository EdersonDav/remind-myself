import { IPlayBasketball } from './IPlaySegregation';

export class Basketball implements IPlayBasketball{
  makePoints(): string {
    return 'point!!'
  }

  play(): string {
    return 'start!!'
  }

}
