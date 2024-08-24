
function findMiddleElement(head) {
    
    let slowPointer = head
    let fastPointer = head

    // traverse until the fast pointer reaches the last node or null
    
    while(fastPointer != null && fastPointer.next != null) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }

    /*while(fastPointer.next != null && fastPointer.next.next != null) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }*/

    return slowPointer.data

}