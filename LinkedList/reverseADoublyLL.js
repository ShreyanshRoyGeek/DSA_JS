
function reverseDLL(head) {

    if (!head) return head;

    let current = head;
    let temp = null;

    // Traverse the list and swap next and prev pointers for each node
    while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev; // Move to the next node (which is the previous node before the swap)
    }

    // After the loop, temp will be pointing to the new head (original tail)
    if (temp) {
        head = temp.prev;
    }

    return head;
}




function reverseDLLII(head) {

    if (!head) return head;
      
      //code here
    let left = head, right = head;
      
    while (right.next) {
        right = right.next;
    }
      
    while (left !== right && left.prev !== right) {
        const temp = left.data;
        left.data = right.data;
        right.data = temp;
        
        left = left.next;
        right = right.prev;
    }
    
    return head;
}




