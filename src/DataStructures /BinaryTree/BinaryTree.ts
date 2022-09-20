interface ITree{
  root: number;
  left: INode | null;
  right: INode | null;
}

interface INode{
  data:number;
  left: number;
  right: number;
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
        this.tree = this.buildRoot(data)
      }else{
        this.tree = this.buildNode(data)
      }

    })
    
  }

  private buildRoot(value: number):ITree{
    return {
      root: value,
      left: null,
      right: null
    }
    
  }

  private buildNode(value: number):ITree{
    return this.tree;
  }
}