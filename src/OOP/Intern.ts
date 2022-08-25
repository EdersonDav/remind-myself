import { Company } from './Company';
export class Intern extends Company {
  constructor() {
    super()
  }

  public setPlusValuePecentageInSalary() {
    this.plusValuePecentageInSalary = 0;
  }

  public setDiscount() {
    this.discount = 0;
  }
}