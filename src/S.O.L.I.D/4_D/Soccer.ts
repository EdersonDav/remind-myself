import { IPlay } from './IPlay';

export class Soccer{
  playInterface: IPlay;
  constructor(play: IPlay){
    this.playInterface = play;
  }

  play(): string {
    return this.playInterface.play('kick the ball')
  }

}
