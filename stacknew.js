

class Stack {
    constructor() {
        this.myArray = [];
    }
    addElement(data) {
        //method add element at top of stack
        this.myArray.push(data);
    }

    size() {
        return this.myArray.length;
    }

    removeElement() {
        //method return the top most element of stack and remove it
        if (this.isEmpty())
            return "UnderFlow";
        else
            return this.myArray.pop();
    }
    peek() {
        // returns the topmost element without removing it from stack
        if (this.isEmpty())
            return "No elements in the stack";
        else
            return this.myArray[this.myArray.length - 1];
    }
    isEmpty() {

        // return empty array if it is
        return this.myArray.length == 0;
    }
    printStack() {
        // print the stack in array format
        var str = " ";
        for (var i = 0; i < this.myArray.length; i++) {
            str += this.myArray[i] + ",";
        }
        return str;
    }
    clear(){
        return this.myArray.length=0;
    }
}

const s = new Stack();

let add = () => {
    let txt1 = document.getElementById("text-box");
    if (txt1.value == "") {
        alert("first enter value");
    }
    else {
        let item = txt1.value;
        s.addElement(item);
        txt1.value = "";
        document.getElementById("items").innerHTML = s.myArray.join("<br>");
    }
}

let remove = () => {
    s.removeElement();
    document.getElementById("items").innerHTML = s.myArray.join("<br>");
}

let top1 = () => document.getElementById("top-element").innerHTML = s.peek();

let isempty = () => alert(s.isEmpty());

let size = () => alert(" Size of  Stack is " + s.size());

let clear= () =>  s.clear();
