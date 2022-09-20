import { Queue } from '../Queue'

describe("Test FIFO Data Struture", () => {
  const lastIn = 'banana';
  const middleIn = 'grape';
  const firstIn = 'apple';
  let countQueue = 0;
  const queue = new Queue();

  it('should add fruits in queue', () => {
    queue.addElement(firstIn);
    countQueue++;

    queue.addElement(middleIn);
    countQueue++;

    queue.addElement(lastIn);
    countQueue++;


    expect(queue.getLength()).toBe(countQueue);

  })

  it('should remove first in fruit in queue - (First In First Out )', () => {
    //------------------------------------------
    //First In
    expect(queue.getAll()[0]).toBe(firstIn);

    //First OUT
    expect(queue.getElement()).toBe(firstIn);
    countQueue--;

    expect(queue.contains(firstIn)).toBe(false);
    //------------------------------------------

    expect(queue.getLength()).toBe(countQueue);

  });

})