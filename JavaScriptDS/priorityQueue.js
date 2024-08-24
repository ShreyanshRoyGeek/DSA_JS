
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    // Method to add an element to the queue with a priority
    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    // Method to remove and return the element with the highest priority
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift().element;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Method to get the size of the queue
    size() {
        return this.queue.length;
    }

    // Method to view the element with the highest priority without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0].element;
    }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue('Task 1', 3);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 2);

console.log('Peek:', pq.peek()); // Output: Task 2
console.log('Dequeue:', pq.dequeue()); // Output: Task 2
console.log('Size:', pq.size()); // Output: 2

