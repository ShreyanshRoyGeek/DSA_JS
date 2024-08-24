class Queue {
    constructor() {
        this.items = [];
    }

    // Method to add an element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove an element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Method to view the front element in the queue
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to view the elements in the queue
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // Output: 10
console.log(queue.printQueue()); // Output: 10 20 30

queue.dequeue();
console.log(queue.printQueue()); // Output: 20 30
