class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Pointer to the head node
        this.size = 0; // Number of nodes in the linked list
    }

    // Method to insert a node at the end of the linked list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Method to insert a node at the beginning of the linked list
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Method to insert a node at a specific position in the linked list
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return false; // Invalid index
        }
        if (index === 0) {
            this.prepend(data);
            return true;
        }
        const newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = newNode;
        newNode.next = current;
        this.size++;
        return true;
    }

    // Method to remove a node at a specific position in the linked list
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null; // Invalid index
        }
        let current = this.head;
        let previous = null;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    // Method to remove a node with specific data from the linked list
    remove(data) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.data === data) {
                if (previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null; // Data not found
    }

    // Method to get the size of the linked list
    getSize() {
        return this.size;
    }

    // Method to check if the linked list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to print the linked list
    print() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

// Example usage:
const linkedList = new LinkedList();


linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insertAt(15, 2);
linkedList.print(); // Output: 5 -> 10 -> 15 -> 20

linkedList.remove(15);
linkedList.print(); // Output: 5 -> 10 -> 20

console.log("Size:", linkedList.getSize()); // Output: 3
console.log("Is empty:", linkedList.isEmpty()); // Output: false

console.log("LinkedList ----> 🙂", linkedList)