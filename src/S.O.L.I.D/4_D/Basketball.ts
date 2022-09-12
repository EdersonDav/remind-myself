import { IPlay } from './IPlay';

export class Basketball{
  playInterface: IPlay;
  constructor(play: IPlay){
    this.playInterface = play;
  }

  play(): string {
    return this.playInterface.play('bounce the ball')
  }

}
