import { IPayment } from './IPayment';

export class Payment{
  pay!: IPayment;

  constructor(pay: IPayment){
    this.pay = pay;
  }

  payCredit(value: number){
    return this.pay.paymentCreditCard(value)
  }

  payDebit(value: number){
    return this.pay.paymentDebitCard(value)
  }

  generateTicket(value: number){
    return this.pay.generateTicketCode(value)
  }
}