class DoublyLinkedListNode {
    constructor(data) {
        this.data = data
        this.prev = null;
        this.next = null;
    }
}
const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    printList() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
    traverseList(pos) {
        let count = 1
        let temp = this.head
        while (count < pos - 1) {
            temp = temp.next
            count++
        }
        return temp
    }


    insertNodeAtTail(nodeData) {
        const node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }

    insertNodeAtHead(nodeData) {
        const node = new DoublyLinkedListNode(nodeData);
        if (this.head == null) {
            this.head = node;
        } else {
            this.head.prev = node
            node.next = this.head
        }

        this.head = node;
    }

    insertNodeAtPosition(nodeData, pos) {
        const node = new DoublyLinkedListNode(nodeData)
        const prevNode = this.traverseList(pos)
        let leadNode = prevNode.next
        node.next = leadNode
        leadNode.prev = node
        prevNode.next = node
        node.prev = prevNode
    }

    deleteFromPosition(pos) {

    }
};

let dlinklist = new DoublyLinkedList()
dlinklist.insertNodeAtTail(1)

dlinklist.insertNodeAtTail(2)

dlinklist.insertNodeAtTail(3)

dlinklist.insertNodeAtTail(4)

dlinklist.insertNodeAtTail(5)

dlinklist.insertNodeAtTail(6)

dlinklist.insertNodeAtHead(7)

dlinklist.insertNodeAtPosition(43, 3)

dlinklist.printList();





