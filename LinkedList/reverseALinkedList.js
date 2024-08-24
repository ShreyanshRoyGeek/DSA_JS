/*



*/


function revesseALinkedListIterative(head) {

    if(!head) {
        return 
    }

    else if(!head.next) {
        return head
    }

    let prevNode = head
    let currNode = head.next

    while(currNode) {

        let nextNode = currNode.next
        currNode.next = prevNode

        //update
        prevNode = currNode
        currNode = nextNode

    }

    head.next = null
    head = prevNode


}


function reverseALinkedListRecursive(head) {

    if(!head.next) {
        return head
    }

    let newHead = reverseALinkedListRecursive(head.next)

    head.next.next = head
    head.next = null

    return newHead

}





