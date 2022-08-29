import { products } from '../Products';
import { createProduct } from '../CreateProduct';
import { saveProduct } from '../SaveProduct';
import { deleteProduct } from '../DeleteProduct';

describe('Single Responsibility test with Singleton pattern', () => {
  const expectedProducts = [{ name: 'apple' }, { name: 'grape' }, { name: 'coconut' }];
  const expectedProductsBeforeDelete = [{ name: 'apple' }, { name: 'grape' }];

  it('should create and save products', () => {
    createProduct.setProductName('apple');
    saveProduct.saveProduct(createProduct.getProductName());
    createProduct.setProductName('grape');
    saveProduct.saveProduct(createProduct.getProductName());
    createProduct.setProductName('coconut');
    saveProduct.saveProduct(createProduct.getProductName());

    products.setList(saveProduct.getProducts());
    expect(products.getList()).toEqual(expectedProducts);
  })

  it('should delete and save new list products', () => {
    deleteProduct.deleteProduct('coconut', products.getList())
    saveProduct.saveProducts(deleteProduct.getList());
    products.setList(saveProduct.getProducts());
    expect(products.getList()).toEqual(expectedProductsBeforeDelete);
  })
})