class CreateProduct {
  private name!: string;

  public setProductName(name: string) {
    this.name = name;
  }

  public getProductName() {
    return this.name;
  }
}


export const createProduct = new CreateProduct();