export class BinarySearch {
  public count!: number;
  public index!: number;
  private midle!: number;

  constructor() {
    this.count = 0;
  }

  public search(list: number[], left: number, rigth: number, value: number): void {
    if (rigth >= left) {

      this.findMidle(left, rigth);

      const current = list[this.midle];
      this.count += 1;


      if (current === value) {
        this.index = this.midle;
        return
      }

      if (current > value) {
        this.search(list, left, this.midle - 1, value)
        return
      }

      this.search(list, this.midle + 1, rigth, value)
      return
    }

    this.index = -1;
    return
  }

  private findMidle(left: number, rigth: number): void {
    this.midle = Math.ceil(left + (rigth - left) / 2)
  }

}