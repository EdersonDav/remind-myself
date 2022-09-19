import { IPayment } from '../IPayment';
import { Payment } from '../Payment';
import { factory } from '../factory';

describe('Payments Methods', ()=>{

  it('should payment with Pagarme API', ()=>{
    const apiPagarme:IPayment = factory('pagarme');

    const pay = new Payment(apiPagarme);

    const payment = pay.payCredit(2000)

    expect(payment).toBe(`${apiPagarme.clientName} - payment with credit card value 2000`)

  })

  it('should payment with Pague Seguro API', ()=>{
    const apipagSeguro:IPayment = factory('pagSeguro');

    const pay = new Payment(apipagSeguro);

    const payment = pay.payCredit(2000)

    expect(payment).toBe(`${apipagSeguro.clientName} - payment with credit card value 2000`)

  })

  it('should payment with Stripe API', ()=>{
    const apiStripe:IPayment = factory('stripe');

    const pay = new Payment(apiStripe);

    const payment = pay.payCredit(2000)

    expect(payment).toBe(`${apiStripe.clientName} - payment with credit card value 2000`)

  })
})