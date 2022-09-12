import { CreditCard } from '../CreditCard';

import { DebitCard } from '../DebitCard';

describe('Open Close Principle', () => {
  const peaple = {
    name: 'John Doe',
    documentNumber: 123456789456,
    password: '1234'
  }

  describe('Payment with credit card', () => {
    const creditCard = new CreditCard(peaple.name, peaple.documentNumber, peaple.password);
    it('should payment inactive card', () => {
      expect(() => { creditCard.payment(peaple.password, 'credit') }).toThrow('Inactive card');
    });

    it('should active and payment card with diff password', () => {
      expect(() => creditCard.activeCard('78')).toThrowError('Invalid password');

      creditCard.activeCard(peaple.password);

      expect(() => creditCard.payment('78', 'credit')).toThrowError('Invalid password');
    });

    it('should payment credit card with diff method', () => {
      expect(() => creditCard.payment(peaple.password, 'debit')).toThrowError('Inavlid payment method');
    });

    it('should payment credit card successful', () => {
      expect(creditCard.payment(peaple.password, 'credit')).toBe('payment successful');
    })
  })


  describe('Payment with debit card', () => {
    const debitCard = new DebitCard(peaple.name, peaple.documentNumber, peaple.password);

    it('should payment inactive card', () => {
      expect(() => debitCard.payment(peaple.password, 'debit')).toThrowError('Inactive card');
    });

    it('should active and payment card with diff password', () => {
      expect(() => debitCard.activeCard('78')).toThrowError('Invalid password');

      debitCard.activeCard(peaple.password);

      expect(() => debitCard.payment('78', 'debit')).toThrowError('Invalid password');
    });

    it('should payment credit card with diff method', () => {
      expect(() => debitCard.payment(peaple.password, 'credit')).toThrowError('Inavlid payment method');
    });

    it('should payment credit card successful', () => {
      expect(debitCard.payment(peaple.password, 'debit')).toBe('payment successful');
    })
  })
})