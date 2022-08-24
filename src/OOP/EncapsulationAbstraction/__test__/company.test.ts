import { Company } from '../Company'
describe('Encapsulation and Abstraction', () => {
  it('should create class company whit simple salary - Encapsulation', () => {
    const companyEmployersNumber = 100;
    const companySalaryEmployers = 1000;

    const company = new Company();
    company.setEmployers(companyEmployersNumber);
    company.setSalaryByEmployer(companySalaryEmployers);

    expect(company.getEmployers()).toBe(companyEmployersNumber);
    expect(company.getSalaryByEmployer()).toBe(companySalaryEmployers);
  });

  it('should create class company whit plus salary - Encapsulation', () => {
    const companyEmployersNumber = 100;
    const companySalaryEmployers = 1000;

    const company = new Company();
    company.setPlusValuePecentageInSalary(0.2);
    company.setEmployers(companyEmployersNumber);
    company.setSalaryByEmployer(companySalaryEmployers);

    expect(company.getEmployers()).toBe(companyEmployersNumber);
    expect(company.getSalaryByEmployer()).toBe(companySalaryEmployers + (companySalaryEmployers * 0.2));
  });

  it('should abstract to class company the monthly payment amount - Abstraction', () => {
    const companyEmployersNumber = 100;
    const companySalaryEmployers = 1000;
    const monthValue = companyEmployersNumber * (companySalaryEmployers + (companySalaryEmployers * 0.2));

    const company = new Company();
    company.setPlusValuePecentageInSalary(0.2);
    company.setEmployers(companyEmployersNumber);
    company.setSalaryByEmployer(companySalaryEmployers);

    expect(company.getCompanyMonthlyPaymentAmount()).toBe(monthValue)
  });
})