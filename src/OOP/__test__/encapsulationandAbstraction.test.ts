import { Company } from '../Company'
describe('Encapsulation and Abstraction', () => {
  it('should create class company whit simple salary - Encapsulation', () => {
    const employerBaseSalary = 1000;
    const employerdiscount = 10;

    const company = new Company();
    company.setBaseSalary(employerBaseSalary);
    company.setDiscount(employerdiscount);

    expect(company.getBaseSalary()).toBe(employerBaseSalary);
    expect(company.getDiscount()).toBe(employerdiscount);
  });

  it('should create class company whit plus salary - Encapsulation', () => {
    const employerBaseSalary = 1000;
    const employerdiscount = 10;
    const employerPlusValuePecentageInSalary = 20;

    const company = new Company();
    company.setPlusValuePecentageInSalary(employerPlusValuePecentageInSalary);
    company.setBaseSalary(employerBaseSalary);
    company.setDiscount(employerdiscount);

    expect(company.getBaseSalary()).toBe(employerBaseSalary);
    expect(company.getPlusValuePecentageInSalary()).toBe(employerPlusValuePecentageInSalary);
  });

  it('should abstract to class company the monthly payment amount - Abstraction', () => {
    const employerBaseSalary = 1000;
    const employerdiscount = 10;
    const employerPlusValuePecentageInSalary = 20;
    const monthValue =
      (employerBaseSalary - (employerBaseSalary * (employerdiscount / 100)))
      + employerBaseSalary * (employerPlusValuePecentageInSalary / 100);

    const company = new Company();
    company.setPlusValuePecentageInSalary(employerPlusValuePecentageInSalary);
    company.setBaseSalary(employerBaseSalary);
    company.setDiscount(employerdiscount);

    expect(company.getCompanyMonthlyPaymentAmount()).toBe(monthValue)
  });
})