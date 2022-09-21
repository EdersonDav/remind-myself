import fs from 'fs'
import { BinaryTree } from './DataStructures/BinaryTree/BinaryTree';

const test = new BinaryTree([34,84,15,0,2,99,79,9,88,89,18,31,39,100,101])
// const test = new BinaryTree([45,8,3])
test.buildTree()
console.log(test.tree)


let json = JSON.stringify(test.tree);
fs.writeFile('tree.json', json, (err) =>{
  console.log(err)
});