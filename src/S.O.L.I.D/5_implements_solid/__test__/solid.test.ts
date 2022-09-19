import { IPayment } from '../IPayment';
import { Payment } from '../Payment';
import { factory } from '../factory';

interface Tets{
  class: string;
  name: string;
}

describe('Payments Methods', ()=>{
  describe.each([
    {class: 'pagarme', name: 'Pagarme'},
    {class: 'pagSeguro', name: 'Pague Seguro'},
    {class: 'stripe', name: 'Stripe'},
  ])('$name', (item: Tets) => {
    it(`should payment with API`, ()=>{
      const api:IPayment = factory(item.class);
  
      const pay = new Payment(api);
  
      const payment = pay.payCredit(2000)
  
      expect(payment).toBe(`${api.clientName} - payment with credit card value 2000`)
  
    })
  });

})