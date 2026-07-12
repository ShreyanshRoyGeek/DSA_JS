/*
    19. Remove Nth node from end of LL --> (Medium)

    Given the head of a linked list, remove the nth node from the end of the list and return its head.

    Example : 
    Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]

    Input: head = [1], n = 1
    Output: []

    Input: head = [1,2], n = 1
    Output: [1]

*/


function removeNthNodeFromEnd(head, n) {

    let curr = head
    let nodeCount = 1

    while(curr.next) {
        curr = curr.next
        nodeCount++
    }

    curr = head

    if(nodeCount-n == 0) {
        // starting node need to be removed
        head = curr.next
    }

    else {
        for(let i=1; i<=nodeCount; i++) {

            // index matching for node to be removed
            if(i == nodeCount-n) {
                if(curr.next) {
                    curr.next = curr.next.next
                }
            }
            else {
                if(curr.next) curr = curr.next
            }

        }
    }

    return head
}


function removeNthNodeFromEndI(head, n) {

    let k = 0;
    let curr = head;
    
    // Find length of list 
    while (curr) {
        curr = curr.next;
        k++;
    }
    
    // if head is the nth node from end 
    if (k - n === 0) return head.next;
    
    // Reach the node just before the target node.
    curr = head;
    for (let i = 1; i < k - n; i++) {
        curr = curr.next;
    }

    // Skip the target node
    curr.next = curr.next.next;

    return head;

}


// Two pointer approach
function removeNthNodeFromEndII(head, n) {

    let fast = head
    let slow = head

    for(let i=1; i<=n; i++) {
        fast = fast.next
    }

    if(fast == null) return head.next

    while(fast.next !== null) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return head
}



