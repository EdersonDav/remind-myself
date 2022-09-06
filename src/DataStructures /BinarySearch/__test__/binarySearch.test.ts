import { BinarySearch } from '../BinarySearch';

describe('Test Binary Search', () => {
  const list = Object.keys(new Array(20).fill(null)).map(Number)

  it('should search last item in list, but does not cycle through all items', () => {
    const binarySearch = new BinarySearch()
    binarySearch.search(list, 0, list.length - 1, list[list.length - 1]);

    expect(list[binarySearch.index]).toEqual(list[list.length - 1]);

    console.log(binarySearch.count)
    console.log(list.length)
    expect(binarySearch.count < list.length).toBe(true)
  });

  it('should not search iten on list, return -1', () => {
    const binarySearch = new BinarySearch()
    binarySearch.search(list, 0, list.length - 1, list.length + 5);

    expect(binarySearch.index).toEqual(- 1);

    expect(binarySearch.count < list.length).toBe(true)
  })
})