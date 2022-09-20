export class Stack {
  public list;

  constructor(list: string[]) {
    this.list = list;
  }

  public getLength() {
    return this.list.length
  }

  public addElement(element: string) {
    this.list.push(element);
  }

  public getElement() {
    const element = this.list[this.list.length - 1]
    this.list.pop()
    return element
  }

  public contains(element: string) {
    return this.list.includes(element)
  }
}