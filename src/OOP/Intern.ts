import { Employer } from './Employer';
export class Intern extends Employer {
  constructor() {
    super()
  }

  public setPlusValuePecentageInSalary(value: number) {
    this.plusValuePecentageInSalary = 0;
  }

  public setDiscount(value: number) {
    this.discount = 0;
  }
}