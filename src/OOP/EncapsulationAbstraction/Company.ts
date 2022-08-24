export class Company {
  private employers!: number;
  private salaryByEmployer!: number;
  private plusValuePecentageInSalary!: number;

  public setPlusValuePecentageInSalary(value: number) {
    this.plusValuePecentageInSalary = value;
  }


  public getPlusValuePecentageInSalary(): number {
    return this.plusValuePecentageInSalary;
  }

  public setEmployers(value: number) {
    this.employers = value;
  }


  public getEmployers(): number {
    return this.employers;
  }

  public setSalaryByEmployer(value: number) {
    this.salaryByEmployer = this.plusValuePecentageInSalary ? this.addPlusValueInSalary(value) : value;
  }


  public getSalaryByEmployer(): number {
    return this.salaryByEmployer;
  }

  public getCompanyMonthlyPaymentAmount(): number {
    return this.salaryByEmployer * this.employers
  }

  private addPlusValueInSalary(value: number): number {
    return value + (value * this.plusValuePecentageInSalary)
  }
}