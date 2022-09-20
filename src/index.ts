import { BinaryTree } from './DataStructures/BinaryTree/BinaryTree';

const test = new BinaryTree([45,8,3,9,54,28,56,71,10,2,35,91,89,75])
// const test = new BinaryTree([45,8,3])
test.buildTree()
console.log(test.tree)