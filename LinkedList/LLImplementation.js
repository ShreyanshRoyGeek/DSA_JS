/*
    Linked List implementation 
*/


class Node {

    constructor(data) {

        // data part of the node
        this.data = data

        // pointer to the next node
        this.next = null
    }

}



let head = new Node(18)

head.next = new Node(30)

head.next.next = new Node(40)

head.next.next.next = new Node(45)


