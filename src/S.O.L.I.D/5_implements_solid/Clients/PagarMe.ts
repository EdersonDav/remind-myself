import { IPayment } from '../IPayment';

export class PagarMe implements IPayment{
  paymentCreditCard(value: number): boolean {
    throw new Error('Method not implemented.');
  }
  paymentDebitCard(value: number): boolean {
    throw new Error('Method not implemented.');
  }
  generateTicketCode(value: number): string {
    throw new Error('Method not implemented.');
  }
  
}
