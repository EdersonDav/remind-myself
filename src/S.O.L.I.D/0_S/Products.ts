export class Products {
  private list!: { name: string; }[];

  public setList(list: { name: string; }[]) {
    this.list = list;
  }

  public getList() {
    return this.list;
  }
}

export const products = new Products()