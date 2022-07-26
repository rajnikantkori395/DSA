
        class TreeNode{
            constructor(data){
                this.data=data;
                this.left=null;
                this.right=null;
            }
        }
        class BinarySearchTree{
            constructor(){
                this .root=null;
            }
            insert(data){
                //  it creates a new node to be inserted and calls insertNode()
                var newNode=new TreeNode(data);
                if(this.root===null)
                this.root=newNode;
                else
                this.insertNode(this.root,newNode);
            }

            insertNode(node,newNode){
                // if the data is less than the node data move left of the tree
                if(newNode.data<node.data){
                    if(node.left===null)
                    node.left=newNode;
                    else
                    this.insertNode(node.left,newNode);
                }
                else{
                   // if the data is greater than the node data move right of the tree
                    if(node.right===null)
                    node.right=newNode;
                    else
                    this.insertNode(node.right,newNode);
                }
            }

            remove(data){
                // it calls the removeNode with a given data
                this.root=this.removeNode(this.root,data);
            }

            removeNode(node,key){
                // it remove node with a given data and recur over the tree to find the data and removes it
                if(node===null)
                return null;
                else if(key < node.data){
                    node.left=this.removeNode(node.left,key);
                    return node;
                }
                else if(key > node.data){
                    node.right=this.removeNode(node.right,key);
                    return node;
                }
                else{
                    if(node.left===null && node.right===null){
                        node=null;
                        return node;
                    }
                    if(node.left===null){
                        node=node.right;
                        return node;
                    }
                    else if(node.right===null){
                        node=node.left;
                        return node;
                    }
                    var store=this.findMinNode(node.right);
                    node.data=store.data;
                    node.right=this.removeNode(node.right,store.data);
                    return node;
                }
            }
            inorder(node){
                // Inorder (Left, Root, Right)
                if(node!==null){
                    this.inorder(node.left);
                    let h2= document.getElementById("display").innerHTML+= `${node.data} -->`;
                    let br=document.createElement('br');
                    document.getElementById("display").append(br);
                   //document.write(node.data+"-->");
                    this.inorder(node.right);
                }
            }
             preorder(node){
                // Preorder (Root, Left, Right)
                if(node!==null){
                    document.getElementById("display").innerHTML+= `${node.data} -->`;
                    //document.write(node.data+"-->");
                    this.preorder(node.left);
                    this.preorder(node.right);
                }
            }
            postorder(node){
                //Postorder (Left, Right, Root)
                if(node!==null){ 
                    this.postorder(node.left);
                    this.postorder(node.right);
                    document.getElementById("display").innerHTML += `${node.data} -->`;
                    //document.write(node.data+"-->");
                }
            }

            findMinNode(node){
                //  finds the minimum node in tree and  starts search from given node
                if(node.left===null)
                return node;
                else
                return this.findMinNode(node.left);
            }

            getRootNode(){
                // returns root of the tree
                return this.root;
            }

            search(node,data){
                // search for a node with given data
                if(node==null)
                return null;
                else if(data < node.data)
                return this.search(node.left,data);
                else if(data > node.data)
                return this.search(node.right,data);
                else
                return node;
             }
    }
  
var BST = new BinarySearchTree();



let insert = () => {
    let txt1 = document.getElementById("text-box").value;
    if (txt1 == "") {
        alert("first enter value");
    }
    else {
        BST.insert(txt1);
        txt1="";
        alert("Node inserted");
        console.log(BST);
    }
}

let inorder=() =>{
    "<br>"
    let root= BST.getRootNode();
    BST.inorder(root);
}

let preorder=() =>{
    let root= BST.getRootNode();
    BST.preorder(root);
}

let postorder=() =>{
    let root= BST.getRootNode();
    BST.postorder(root);
}

let remove= () =>{
    
    let data = prompt("Enter Data to be Removed");
    if (data != null) {
        BST.remove(data);
        alert(`${data} removed from`);
        
    }
}

