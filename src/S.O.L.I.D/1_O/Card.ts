export abstract class Card {
  protected name;
  protected documentNumber;
  protected password;
  private active;

  constructor(name: string, documentNumber: number, password: string) {
    this.name = name;
    this.documentNumber = documentNumber;
    this.password = password;
    this.active = false;
  }

  public checkPassword(password: string) {
    if (password !== this.password) {
      throw new Error('Invalid password')
    }
  }

  public checkActive() {
    if (!this.active) {
      throw new Error('Inactive card')
    };
  }


  public activeCard(password: string) {
    this.checkPassword(password)
    this.active = true;
    return 'active'
  }

  public pay(password: string) {
    this.checkActive();
    this.checkPassword(password)
    return 'payment successful'
  }

}