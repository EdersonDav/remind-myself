class DeleteProduct {
  private list!: { name: string; }[];

  public deleteProduct(name: string, list: { name: string; }[]) {
    this.list = list.filter(item => item.name !== name);
  }

  public getList() {
    return this.list;
  }
}


export const deleteProduct = new DeleteProduct();