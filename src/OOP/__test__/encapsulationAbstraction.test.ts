import { factory } from '../factory'
describe('Polymorphism and Inheritance', () => {
  const employer = factory('');
  it('should create class employer whit simple salary - Encapsulation', () => {
    const employerBaseSalary = 1000;
    const employerdiscount = 10;

    employer.setBaseSalary(employerBaseSalary);
    employer.setDiscount(employerdiscount);

    expect(employer.getBaseSalary()).toBe(employerBaseSalary);
    expect(employer.getDiscount()).toBe(employerdiscount);
  });

  it('should create class employer whit plus salary - Encapsulation', () => {
    const employerBaseSalary = 1000;
    const employerdiscount = 10;
    const employerPlusValuePecentageInSalary = 20;

    employer.setPlusValuePecentageInSalary(employerPlusValuePecentageInSalary);
    employer.setBaseSalary(employerBaseSalary);
    employer.setDiscount(employerdiscount);

    expect(employer.getBaseSalary()).toBe(employerBaseSalary);
    expect(employer.getPlusValuePecentageInSalary()).toBe(employerPlusValuePecentageInSalary);
  });

  it('should abstract to class employer the monthly payment amount - Abstraction', () => {
    const employerBaseSalary = 1000;
    const employerdiscount = 10;
    const employerPlusValuePecentageInSalary = 20;
    const monthValue =
      (employerBaseSalary - (employerBaseSalary * (employerdiscount / 100)))
      + employerBaseSalary * (employerPlusValuePecentageInSalary / 100);

    employer.setPlusValuePecentageInSalary(employerPlusValuePecentageInSalary);
    employer.setBaseSalary(employerBaseSalary);
    employer.setDiscount(employerdiscount);

    expect(employer.getemployerMonthlyPaymentAmount()).toBe(monthValue)
  });

  it('should verify typeof class - Factory', () => {

    expect(employer.getTypeEmployer()).toBe('default')
  });
})