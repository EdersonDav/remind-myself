export interface IPayment{
  clientName: string;
  paymentCreditCard(value: number): boolean;
  paymentDebitCard(value: number): boolean;
  generateTicketCode(value: number): string;
}