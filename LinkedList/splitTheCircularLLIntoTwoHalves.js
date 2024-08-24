/*
    splitCircularLLIntoTwoHalves --> LL (Easy)

*/


function splitCircularLLIntoTwoHalves() {

    let slow = node
    let fast = node.next
    
    while(fast !== node && fast.next !== node) {
       slow = slow.next
       fast = fast.next.next
    }
    
    head2 = slow.next
    
    head1 = node
    slow.next = head1 
    
    let curr = head2
    
    while(curr.next !== node) {
        curr = curr.next
    }
    
    curr.next = head2
    
    return node
    

}


