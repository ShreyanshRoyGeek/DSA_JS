/*
    143. Reorder List --> (Medium)

    You are given the head of a singly linked-list. The list can be represented as:
    L0 → L1 → … → Ln - 1 → Ln
    Reorder the list to be on the following form:

    L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
    You may not modify the values in the list's nodes. Only nodes themselves may be changed.

    Example ->

    Input: head = [1,2,3,4]
    Output: [1,4,2,3]

    Input: head = [1,2,3,4,5]
    Output: [1,5,2,4,3]

*/


function reorderList(head) { // Not completed

    let curr = head
    let temp = []

    while(curr.next) {
        temp.push(curr.data)
        curr = curr.next
    }

    let i = 0, j = temp.length - 1

    let newNode = head.data

    while(i<j) {

        newNode.next = temp[i]
        newNode.next.next = temp[j]
        i++ , j--

    }

    return newNode

}


function reorderListI(head) {

    if (!head || !head.next) return head

    // Step 1: Convert linked list to array of nodes
    let nodes = []
    let curr = head
    while (curr) {
        nodes.push(curr)
        curr = curr.next
    }

    // Step 2: Use two pointers - one at start, one at end
    let i = 0
    let j = nodes.length - 1
    let dummy = { val: 0, next: null }
    let prev = dummy

    // Step 3: Alternately link nodes from both ends
    while (i < j) {
        prev.next = nodes[i]      // Link node from start
        nodes[i].next = nodes[j]  // Link node from end
        prev = nodes[j]
        i++
        j--
    }

    // Step 4: Handle odd-length list (middle element)
    if (i === j) {
        prev.next = nodes[i]      // Link the middle node
        nodes[i].next = null
    } else {
        prev.next = null           // Even length - terminate here
    }

    return dummy.next
}


function reorderListII(head) {

    if(head || !head.next) return head
    
    let nodes = []
    let curr = head

    while(curr) {
        nodes.push(curr.val)
        curr = curr.next
    }

    let i = 0, j = nodes.length - 1
    let dummy = { val : 0, next : null }
    let prev = dummy

    while(i < j) {
        prev.next = nodes[i]
        nodes[i].next = nodes[j]
        prev = nodes[j]
        i++, j--
    }

    if(i == j) {
        prev.next = nodes[i]
        nodes[i].next = null
    }
    else {
        prev.next = null
    }

    return dummy.next

}


