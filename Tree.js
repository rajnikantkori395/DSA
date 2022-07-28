class TreeNode {
    constructor(value) {
        this.value = value;  
        this.left = null; 
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this .root=null;
    }
    insert(value,key){
        //  it creates a new node to be inserted and calls insertNode()
        var newNode=new TreeNode(value);
        if(this.root===null)
        this.root=newNode;
       
    }
    insertLeft(value){
        var newNode = new TreeNode(value);
        if(this.root.left==null){

            this.root.left = newNode;

        }
        }
        
    }


var tree =  new BinaryTree();
tree.insert(5);
tree.insertLeft(6);
console.log(tree);