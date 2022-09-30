import { Products } from '../Products';
import { INotification } from '../INotification';
import { MobilePushNotification } from '../MobilePushNotification';

describe('Single Responsibility Principle', () => {
  const expectedProducts = [{ name: 'apple' }, { name: 'grape' }, { name: 'coconut' }];

  it('should create new product, and notification mobile users', () => {
    const notification : INotification = new MobilePushNotification();
    const product = new Products(notification);
    const newProduct = 'coconut'
    product.createNewProduct(newProduct);

    expect(product.getAll()).toEqual(expectedProducts);
    expect(product.sendNotification()).toBe('moblie users notified about new product');
  })
  
})