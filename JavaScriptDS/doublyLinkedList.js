class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.prev = null; // Pointer to the previous node
        this.next = null; // Pointer to the next node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Pointer to the head node
        this.tail = null; // Pointer to the tail node
        this.size = 0; // Number of nodes in the doubly linked list
    }

    // Method to insert a node at the end of the doubly linked list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.size++;
    }

    // Method to insert a node at the beginning of the doubly linked list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Method to insert a node at a specific position in the doubly linked list
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return false; // Invalid index
        }
        if (index === 0) {
            this.prepend(data);
            return true;
        }
        if (index === this.size) {
            this.append(data);
            return true;
        }
        const newNode = new Node(data);
        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
        return true;
    }

    // Method to remove a node at a specific position in the doubly linked list
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null; // Invalid index
        }
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.size - 1) {
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            let count = 0;
            while (count < index) {
                current = current.next;
                count++;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
        return current.data;
    }

    // Method to remove a node with specific data from the doubly linked list
    remove(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null;
                    }
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return current.data;
            }
            current = current.next;
        }
        return null; // Data not found
    }

    // Method to get the size of the doubly linked list
    getSize() {
        return this.size;
    }

    // Method to check if the doubly linked list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to print the doubly linked list in forward direction
    printForward() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log("Forward:", result.join(" <-> "));
    }

    // Method to print the doubly linked list in backward direction
    printBackward() {
        let current = this.tail;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.prev;
        }
        console.log("Backward:", result.join(" <-> "));
    }
}

// Example usage:
const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append(10);
doublyLinkedList.append(20);
doublyLinkedList.prepend(5);
doublyLinkedList.insertAt(15, 2);
doublyLinkedList.printForward(); // Output: Forward: 5 <-> 10 <-> 15 <-> 20

