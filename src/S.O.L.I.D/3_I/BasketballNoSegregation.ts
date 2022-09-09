import { IPlayNoSegregation } from './IPlayNoSegregation';

export class BasketballNoSegregation implements IPlayNoSegregation{
  kickTheBall(): string {
    throw new Error('Basketball not kick the ball')
  }

  play(): string {
    return "start!!"
  }
}