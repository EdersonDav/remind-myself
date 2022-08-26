import { Employer } from './Employer';
export class Manager extends Employer {
  private managerPlusBaseSalary = 2000;
  private managerDiscount = 0.05;

  constructor() {
    super()
  }

  public setBaseSalary(value: number) {
    this.baseSalary = value + this.managerPlusBaseSalary;
  }

  public setDiscount(value: number) {
    this.discount = value > 0 ? (value / 100) + this.managerDiscount : this.managerDiscount;
  }
}