import {IPlay} from './IPlay'

export class Provider implements IPlay{
  play(value: string): string {
    return value;
  }
  
}