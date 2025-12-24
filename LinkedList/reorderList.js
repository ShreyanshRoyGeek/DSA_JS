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


function reorderList(head) {

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