class Stack {
    constructor() {
        this.items = []; // Initialize an empty array to store the stack elements
    }

    // Pushes an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pops the top element from the stack and returns it
    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // If stack is empty
        }
        return this.items.pop();
    }

    // Returns the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in the stack"; // If stack is empty
        }
        return this.items[this.items.length - 1];
    }

    // Returns true if the stack is empty, false otherwise
    isEmpty() {
        return this.items.length === 0;
    }

    // Returns the size of the stack
    size() {
        return this.items.length;
    }

    // Clears the stack
    clear() {
        this.items = [];
    }

    // Prints the stack elements
    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack elements:", stack.print()); // Output: [1, 2, 3]
console.log("Stack size:", stack.size()); // Output: 3
console.log("Top element:", stack.peek()); // Output: 3
console.log("Popped element:", stack.pop()); // Output: 3
console.log("Stack elements after popping:", stack.print()); // Output: [1, 2]
