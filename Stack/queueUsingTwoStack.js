/*
    Implement a Queue using 2 stacks s1 and s2 .

    A Query q is of 2 Types
    (i) 1 x (a query of this type means  pushing 'x' into the queue)
    (ii) 2   (a query of this type means to pop element from queue and print the poped element)

    Note : If there is no element return -1 as answer while popping.

    Examples :

    Input: q=5, queries[][]=[[1, 2], [1, 3], [2], [1, 4], [2]]
    Output: [2, 3]
    Explanation: 
    In the first testcase
    [1 2] the queue will be [2]
    [1 3] the queue will be [2 3]
    [2]   poped element will be 2 the queue 
    will be [3]
    [1 4] the queue will be [3 4]
    [2 ]  poped element will be 3.


    Input: q = 4, queries[][] = [[1, 2], [2], [2], [1, 4]]
    Output: [2, -1]
    Explanation: 
    In the second testcase 
    [1, 2] the queue will be [2]
    [2] poped element will be [2] and 
        then the queue will be empty
    [2]   the queue is empty and hence -1
    [1, 4] the queue will be [4].


    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(n)
    Company Tags
    FlipkartMorgan Stanley Accolite Amazon Microsoft D-E-Shaw HikeMakeMyTrip Oracle Walmart Goldman Sachs MAQ Software Adobe InfoEdge InMobi


*/



class StackQueue { // FIFO
    constructor() {
        this.s1 = []
        this.s2 = []
    }

    // push at the beginning of s1 with the help of s2 --> O(n)
    enqueue(x) {
        while(this.s1.length > 0) {
            this.s2.push(this.s1.pop())
        }

        this.s1.push(x)

        while(this.s2.length > 0) {
            this.s1.push(this.s2.pop())
        }
    }

    // pop from the last for s1 --> O(1)
    dequeue() {
        if(this.s1.length > 0) {
            return this.s1.pop()
        }

        return -1
    }

    front() {
        if(this.s1.length > 0) {
            return this.s1[this.s1.length -1]
        }

        return -1
    }

    size() {
        return this.s1.length -1
    }

}


const q = new StackQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log("Front:", q.front()); 
console.log("Size:", q.size());  

q.dequeue();        
console.log("Front:", q.front()); 
console.log("Size:", q.size());