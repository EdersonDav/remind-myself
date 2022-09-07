import { Employer } from './Employer';
export class Intern extends Employer {
  protected typeEmployer = 'intern';
  constructor() {
    super()
  }

  public setPlusValuePecentageInSalary(value: number) {
    this.plusValuePecentageInSalary = value - value;
  }

  public setDiscount(value: number) {
    this.discount = 0;
  }
}