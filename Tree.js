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
    insert(value){
        //  it creates a new node to be inserted and calls insertNode()
        var newNode=new TreeNode(value);
        if(this.root===null)
        this.root=newNode;
       
    }
    insertLeft(value,key){
        var newNode = new TreeNode(value);
        var node = this.root;
        do{
        if(node.left==null && node.value==key){

            node.left = newNode;

        }
        else{
            node = node.left;
            
        }
    }while(node.left==null)
        }
        
    }


var tree =  new BinaryTree();
tree.insert(5);
tree.insertLeft(6,5);
tree.insertLeft(9,6);

console.log(tree);