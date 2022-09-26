import { BinaryTree } from '../BinaryTree';
describe("Binary Tree", ()=>{
  const arry = [34,84,150,120,2,98,91,9,8,89,88,3,9,12,105]
  it("should build a binary and verify order list result", ()=>{
    const binaryTree = new BinaryTree(arry);
    binaryTree.buildTree();

    const sort = arry.sort((a,b)=> a - b);
    console.log(sort)
    const binarySort = binaryTree.getListInOrder()
    console.log(binarySort)
    // expect().toEqual(sort);
  })
})