import { Card } from './Card';

export class Money extends Card {
  public override getPassword(): string {
    throw new Error('not implements password in money');
  }
}
