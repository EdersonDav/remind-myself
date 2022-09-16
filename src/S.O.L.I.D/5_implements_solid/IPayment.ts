export interface IPayment{
  clientName: string;
  paymentCreditCard(value: number): string;
  paymentDebitCard(value: number): string;
  generateTicketCode(value: number): string;
  paymentMessage(value: number, method:string): string;
}