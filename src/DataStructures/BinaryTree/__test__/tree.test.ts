import { BinaryTree } from '../BinaryTree';
describe("Binary Tree", ()=>{
  const arry = Array(9999).fill((value: number)=>value).map(() => 500 * Math.random());

  it("should build a binary and verify order list result", ()=>{
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
})