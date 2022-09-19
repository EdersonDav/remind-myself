import { PagSeguro } from './Clients/PagSeguro'
import { PagarMe } from './Clients/PagarMe'
import { Stripe } from './Clients/Stripe'
import { IPayment } from "./IPayment";

interface IPaymentClients{
  stripe: IPayment;
  pagSeguro: IPayment;
  pagarme: IPayment;
}

export const factory = (method: string): IPayment =>{
  const paymentClients = {
    stripe: Stripe,
    pagSeguro: PagSeguro,
    pagarme: PagarMe
  }

  return new paymentClients[method as keyof IPaymentClients]()
}