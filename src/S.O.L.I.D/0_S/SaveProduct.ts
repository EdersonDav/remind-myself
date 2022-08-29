class SaveProduct {
  private list!: { name: string; }[];

  public saveProduct(name: string) {
    if (this.list?.length) {
      this.list.push({ name })
    } else {
      this.list = [{ name }]
    }

  }

  public saveProducts(list: { name: string; }[]) {
    this.list = list
  }

  public getProducts() {
    return this.list;
  }

}


export const saveProduct = new SaveProduct();