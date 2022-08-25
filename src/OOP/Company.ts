export class Company {
  protected baseSalary!: number;
  protected discount = 0;
  protected plusValuePecentageInSalary = 0;

  public setPlusValuePecentageInSalary(value: number) {
    this.plusValuePecentageInSalary = value > 0 ? value / 100 : 0;
  }


  public getPlusValuePecentageInSalary(): number {
    return this.plusValuePecentageInSalary > 0 ? this.plusValuePecentageInSalary * 100 : this.plusValuePecentageInSalary
  }

  public setBaseSalary(value: number) {
    this.baseSalary = value;
  }


  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public setDiscount(value: number) {
    this.discount = value > 0 ? value / 100 : 0;
  }


  public getDiscount(): number {
    return this.discount > 0 ? this.discount * 100 : this.discount
  }

  public getCompanyMonthlyPaymentAmount(): number {
    return this.calcSalary()
  }

  private calcSalary(): number {
    return (this.baseSalary - (this.baseSalary * this.discount)) + this.baseSalary * this.plusValuePecentageInSalary
  }
}