import fs from 'fs'
import { BinaryTree } from './DataStructures/BinaryTree/BinaryTree';

const binaryTree = new BinaryTree([34,84,150,120,2,98,91,9,8,89,88,3,12,105])
binaryTree.buildTree();

let json = JSON.stringify(binaryTree.tree);
fs.writeFile('assets/tree.json', json, (err) =>{
  if(err)
  console.log(err)
});