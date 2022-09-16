import { IPayment } from '../IPayment';

export class PagarMe implements IPayment{
  clientName = 'Pagar Me';

  paymentCreditCard(value: number): string {
    return this.paymentMessage(value, 'credit');
  }
  
  paymentDebitCard(value: number): string {
    return this.paymentMessage(value, 'debit');
  }

  generateTicketCode(value: number): string {
    return `Code: ${Math.random()}, value ${value}`;
  }

  paymentMessage(value: number, method:string): string {
    return `${this.clientName} - payment with ${method} card value ${value}`
  }
  
}
