import fs from 'fs'
import { BinaryTree } from './DataStructures/BinaryTree/BinaryTree';

const test = new BinaryTree([34,84,15,0,2,99,79,9,88,89,18,31,39,100,101])
test.buildTree()
console.log(test.getListInOrder())
console.log(test.getListPosOrder())
console.log(test.getListPreOrder())


let json = JSON.stringify(test.tree);
fs.writeFile('assets/tree.json', json, (err) =>{
  console.log(err)
});