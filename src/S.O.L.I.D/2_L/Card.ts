import { CardInterface } from './CardInterface';

export class Card implements CardInterface {
  password!: string;

  public setPassword(password: string): void {
    this.password = password;
  }

  public getPassword(): string {
    return this.password
  }
}
