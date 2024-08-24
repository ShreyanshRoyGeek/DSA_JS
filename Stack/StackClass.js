class Stack {

    constructor() {
        this.arr = []
    }

    push(a) {
        this.arr.push(a)
    }

    pop() {
        this.arr.pop()
    }

    top() {
        const index = this.arr.length - 1
        return this.arr[index]
    }

    empty() {
        if(this.arr.length !== 0) {
            return false
        }
        else {
            return true
        }
    }

    size() {
        return this.arr.length
    }

}


const stack = new Stack()
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)


console.log(stack)

stack.pop()

console.log(stack.size())

console.log(stack)


