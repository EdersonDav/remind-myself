import { BinaryTree } from '../BinaryTree';
describe("Binary Tree", ()=>{
  it("should build a binary and verify order list result", ()=>{
    const arry = Array(9999).fill((value: number)=>value).map(() => 500 * Math.random());
    const binaryTree = new BinaryTree(arry);
    binaryTree.buildTree();
    
    console.time('sort')
    const sort = arry.sort((a,b)=> a - b);
    console.timeEnd('sort')
    console.time('binarySort')
    const binarySort = binaryTree.getListInOrder()
    console.timeEnd('binarySort')
    expect(binarySort).toEqual(sort);
  })

  it("should build a binary and insert order number in tree", ()=>{
    const arry = [34,84,150,120,2,98,91,9,8,89,88,3,12,105]
    const binaryTree = new BinaryTree(arry);
    binaryTree.buildTree();
    binaryTree.insert(0);
    binaryTree.insert(1000);
    
    const binarySort = binaryTree.getListInOrder();

    const {length, 0: first, [length - 1]: last} = binarySort
    
    expect(first).toBe(0);
    expect(last).toBe(1000);
  })

  it("should search value in tree", ()=>{
    const arry = [34,84,150,120,2,98,91,9,8,89,88,3,12,105]
    const binaryTree = new BinaryTree(arry);
    binaryTree.buildTree();

    const valueSearch = binaryTree.search(9) 
    expect(valueSearch).toBe(9);
  })
})