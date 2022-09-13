export interface IPayment{
  paymentCreditCard(value: number): boolean;
  paymentDebitCard(value: number): boolean;
  generateTicketCode(value: number): string;
}