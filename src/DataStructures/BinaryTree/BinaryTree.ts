interface ITree{
  data: number;
  left: ITree | null;
  right: ITree | null;
}

export class BinaryTree{
  list!: number[];
  listOrder: number[] = [];
  tree!: ITree;

  constructor(list:number[]){
    this.list = list;
  }

  public buildTree(){
    this.list.forEach((data: number)=>{
      if(!this.tree?.data){
        this.buildRoot(data)
      }else{
        this.buildNode(data)
      }

    })
    
  }

  public insert(value: number):void{
    this.buildNode(value);
  }

  private buildRoot(value: number):void{
    this.tree = {
      data: value,
      left: null,
      right: null
    }
    
  }

  private buildNode(value: number):void{
    if(this.tree.data > value){
      if(this.tree.left){
        this.tree.left = this.insertInTree(this.tree.left, value)
      }else{
        this.tree.left = this.buildData(value)
      }
    }else{
      if(this.tree.right){
        this.tree.right = this.insertInTree(this.tree.right, value)
      }else{
        this.tree.right = this.buildData(value)
      }
    }
    
  }

  private insertInTree(tree: ITree | null, value: number):ITree{
    if(tree){
      if(tree.data < value) {
        tree.right = this.insertInTree(tree.right, value)
        return tree
      }
      
      if( tree.data > value) {
        tree.left = this.insertInTree(tree.left, value)
        return tree
      }
    }
    tree = this.buildData(value);

    return tree;
  }


  private buildData(value: number):ITree{
    return{
      data: value,
      left: null,
      right: null
    }
  }

  public getListInOrder(){
    this.inOrderTree(this.tree);
    const list = this.listOrder
    this.clearListOrder();
    return list
  }

  public getListPreOrder(){
    this.preOrderTree(this.tree);
    const list = this.listOrder
    this.clearListOrder();
    return list
  }

  public getListPosOrder(){
    this.posOrderTree(this.tree);
    const list = this.listOrder
    this.clearListOrder();
    return list
  }

  private inOrderTree(tree: ITree){
    tree.left && this.inOrderTree(tree.left);
    this.listOrder.push(tree.data)
    tree.right && this.inOrderTree(tree.right);
  }

  private posOrderTree(tree: ITree){
    tree.left && this.inOrderTree(tree.left);
    tree.right && this.inOrderTree(tree.right);
    this.listOrder.push(tree.data)
  }

  private preOrderTree(tree: ITree){
    this.listOrder.push(tree.data)
    tree.left && this.inOrderTree(tree.left);
    tree.right && this.inOrderTree(tree.right);
  }

  private clearListOrder(){
    this.listOrder = []
  }
}