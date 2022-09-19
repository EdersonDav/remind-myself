import { PagSeguro } from './Clients/PagSeguro'
import { PagarMe } from './Clients/PagarMe'
import { Stripe } from './Clients/Stripe'
import { IPayment } from "./IPayment";

export const factory = (method: 'stripe' | 'pagSeguro' | 'pagarme'): IPayment =>{
  const paymentClients = {
    stripe: Stripe,
    pagSeguro: PagSeguro,
    pagarme: PagarMe
  }

  return new paymentClients[method]()
}