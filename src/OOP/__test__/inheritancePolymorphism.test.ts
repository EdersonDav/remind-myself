import { factory } from '../factory';

describe('Polymorphism and Inheritance', () => {
  const internSalary = 1000;
  const managerSalary = 5000;
  const managerDiscounty = 10;
  const managerPlusValuePecentageInSalary = 10;
  it('should create class intern an manager - Inheritance', () => {
    const intern = factory('intern');
    const manager = factory('manager');

    intern.setBaseSalary(internSalary);
    manager.setBaseSalary(managerSalary);
    manager.setPlusValuePecentageInSalary(managerPlusValuePecentageInSalary);

    expect(intern.getBaseSalary()).toBe(internSalary)
    expect(manager.getPlusValuePecentageInSalary()).toBe(managerPlusValuePecentageInSalary)
  });

  it('should create class intern an manager whit plus salary, intern not discount and manager plus base salary - Polymorphism', () => {
    const intern = factory('intern');
    const manager = factory('manager');

    intern.setBaseSalary(internSalary);
    intern.setDiscount(1000);
    manager.setBaseSalary(managerSalary);
    manager.setDiscount(managerDiscounty);
    manager.setPlusValuePecentageInSalary(managerPlusValuePecentageInSalary);

    expect(intern.getemployerMonthlyPaymentAmount()).toBe(internSalary)
    expect(manager.getBaseSalary()).toBe(managerSalary + 2000)
    expect(manager.getemployerMonthlyPaymentAmount()).toBe(
      ((managerSalary + 2000) - ((managerSalary + 2000) * (0.1 + 0.05))) + (managerSalary + 2000) * 0.1)
  });
})