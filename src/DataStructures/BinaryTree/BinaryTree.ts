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
    console.log(value);
    if(this.tree.root > value){
      if(this.tree.left){
        this.tree.left = this.insertLeft(this.tree.left, value)
      }else{
        this.tree.left = this.buildData(value)
      }
    }else{
      if(this.tree.right){
        this.tree.right = this.insertRight(this.tree.left, value)
      }else{
        this.tree.right = this.buildData(value)
      }
    }
    
  }

  private insertLeft(tree: INode | null, value: number){
    if(!tree){
      tree = this.buildData(value);
    }
    tree.data < value && this.insertLeft(tree.left, value)
    tree.data > value && this.insertRight(tree.right, value)

    tree.left = this.buildData(value);
    return tree;
  }

  private insertRight(tree: INode | null, value: number){
    if(!tree){
      tree = this.buildData(value);
    }
    tree.data < value && this.insertRight(tree.right, value)
    tree.data > value && this.insertLeft(tree.left, value)

    tree.right = this.buildData(value);
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