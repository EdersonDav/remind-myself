export class Queue {
  public list: string[] = [];

  public getLength() {
    return this.list.length
  }

  public addElement(element: string) {
    this.list.push(element);
  }

  public getAll() {
    return this.list
  }

  public getElement() {
    const element = this.list[0]
    this.list.shift()
    return element
  }

  public contains(element: string) {
    return this.list.includes(element)
  }
}