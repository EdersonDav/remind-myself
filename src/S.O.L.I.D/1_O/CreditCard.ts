import { Card } from './Card';
import { Payment } from './InterfacePayment';

export class CreditCard extends Card implements Payment {
  public method = 'credit';

  constructor(name: string, documentNumber: number, password: string) {
    super(name, documentNumber, password);
  }

  public payment(password: string, method: string) {
    if (method !== this.method) {
      throw new Error('Inavlid payment method')
    }
    return this.pay(password)
  }

}