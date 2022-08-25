import { Company } from './Company';
export class Manager extends Company {
  private managerPlus = 0.2;
  private managerDiscount = 0.05;

  constructor() {
    super()
  }

  public setPlusValuePecentageInSalary(value: number) {
    this.plusValuePecentageInSalary = value > 0 ? (value / 100) + this.managerPlus : this.managerPlus;
  }

  public setDiscount(value: number) {
    this.discount = value > 0 ? (value / 100) + this.managerDiscount : this.managerDiscount;
  }
}