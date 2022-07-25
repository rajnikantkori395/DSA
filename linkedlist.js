class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    addDataEnd(data) {
        // adds an element at the end of list
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    addDataFront(data) {
        // adds an element at the front of list
        const newNode = {
            value: data,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    traverse(req) {
        // traversing at the each node of data
        let counter = 0;
        let currentNode = this.head;
        while (counter != req) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insertData(index, data) {
        // inserting data at particular node of the linkedlist 
        const newNode = {
            value: data,
            next: null
        }
        const leadNode = this.traverse(index - 1);
        const nextNode = leadNode.next;
        leadNode.next = newNode;
        newNode.next = nextNode;
    }

    deleteData(index) {
        // delete data at particualr index of the node in linkedlist
        const leadNode = this.traverse(index - 1);
        if(leadNode.next===this.tail){
           leadNode.next=null;
           this.tail=leadNode;
           this.length--;
         }else{
         const deleteNode = leadNode.next;
         const nextNode = deleteNode.next;
         leadNode.next = nextNode;
         this.length--;  
         }
        
    }

    displayLinkedList() {
        // printing the required linkedlist
        const myArray = [];
        let currentNode = this.head;
        while (currentNode != null) {
            myArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        document.getElementById("display").innerHTML = myArray.join('--->')
        //document.write(myArray.join('--->') + "<br><br>");
    }
}


const list = new LinkedList(null);
console.log(list.head);

    // list.addDataEnd("one");
    // list.addDataEnd("two");
    // list.addDataEnd("three");
    
 


let add = () => {
    let txt1 = document.getElementById("text-box");
    if (txt1.value == "") {
        alert("first enter value");
    } else if (list.head.value == null) {
        list.head.value = txt1.value;
        txt1.value = "";
        console.log(list.head, "head node");
    }
    else {

        list.addDataEnd(txt1.value);
        txt1.value = "";
        console.log(list.tail, "tail node");
    }
}

let display = () => {
    let d = list.displayLinkedList()
    //document.getElementById("display").innerHTML=d;
}
let insert = () => {
    let txt1 = document.getElementById("text-box").value;
    if (txt1 == "") {
        alert("first enter a value");
    } else {
        let index = prompt("Enter Position");
        if (index != null) {
            list.insertData(index - 1, txt1);
            txt1 = "";
        }
        alert(`inserted at ${index}`);
    }
}

let front = () => {
    let txt1 = document.getElementById("text-box").value;
    if (txt1 == "") {
        alert("first enter a value");
    } else {
        list.addDataFront(txt1);
        alert("data added");
    }
}

let del = () => {

    let index = prompt("Enter Position");
    if (index != null) {
        list.deleteData(index - 1);
        alert(`data deleted at position ${index}`);
        
    }
    console.log(list.tail);
}

let trav = () => {
    let index = prompt("Enter Position");
    if (index != null) {
        let t = list.traverse(index - 1);
        console.log(t);
        document.getElementById("node").innerHTML = t.value;
    }
}


