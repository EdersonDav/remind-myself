import { Stack } from '../Stack'

describe("Test LIFO Data Struture", () => {
  const completeArray = ['apple', 'grape', 'coconut']
  const firstIn = 'banana'
  const lastIn = 'pineapple';
  const countArray = completeArray.length;
  const stack = new Stack(completeArray);

  it('should verify fruits in stack and add first fruit', () => {

    expect(stack.getLength()).toBe(countArray);

    stack.addElement(firstIn);

    expect(stack.getLength()).toBe(countArray + 1);

  })

  it('should add last fruit in stack and remove last fruit in stack - (Last IN First OUT)', () => {
    //------------------------------------------
    //Last IN
    stack.addElement(lastIn);
    expect(stack.getLength()).toBe(countArray + 2);

    //First OUT
    expect(stack.getElement()).toBe(lastIn);

    expect(stack.contains(lastIn)).toBe(false);
    //------------------------------------------

  })

  it('should remove first in fruit in stack', () => {

    expect(stack.contains(firstIn)).toBe(true);
    expect(stack.getElement()).toBe(firstIn);

    expect(stack.getLength()).toBe(countArray);

  })

})