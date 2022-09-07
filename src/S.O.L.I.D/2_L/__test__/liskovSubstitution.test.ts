import { Card } from '../Card';
import { CreditCard } from '../CreditCard';
import { Money } from '../Money';

describe('Liskov Substitution Principle Test', () => {
  it('should substitution class Card', () => {
    const creditCard: Card = new CreditCard();

    creditCard.setPassword('123');

    expect(creditCard.getPassword()).toBe('123')
  });

  it('should not substitution class Card', () => {
    const money: Card = new Money();

    money.setPassword('123');

    expect(() => money.getPassword()).toThrowError('not implements password in money');
  });
})