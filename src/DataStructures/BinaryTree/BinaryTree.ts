interface ITree{
  root: number;
  left: INode | null;
  right: INode | null;
}

interface INode{
  data:number;
  left: INode | null;
  right: INode | null;
}

export class BinaryTree{
  list!: number[];
  tree!: ITree;

  constructor(list:number[]){
    this.list = list;
  }

  public buildTree(){
    this.list.forEach((data: number)=>{
      if(!this.tree?.root){
        this.buildRoot(data)
      }else{
        this.buildNode(data)
      }

    })
    
  }

  private buildRoot(value: number):void{
    this.tree = {
      root: value,
      left: null,
      right: null
    }
    
  }

  private buildNode(value: number):void{
    if(this.tree.root > value){
      if(this.tree.left){
        this.tree.left = this.insert(this.tree.left, value)
      }else{
        this.tree.left = this.buildData(value)
      }
    }else{
      if(this.tree.right){
        this.tree.right = this.insert(this.tree.right, value)
      }else{
        this.tree.right = this.buildData(value)
      }
    }
    
  }

  private insert(tree: INode | null, value: number):INode{
    if(tree){
      if(tree.data < value) {
        tree.right = this.insert(tree.right, value)
        return tree
      }
      
      if( tree.data > value) {
        tree.left = this.insert(tree.left, value)
        return tree
      }
    }
    tree = this.buildData(value);

    return tree;
  }


  private buildData(value: number):INode{
    return{
      data: value,
      left: null,
      right: null
    }
  }
}