/*

    Delete nodes having greater value on right --> Easy (LL)

    Given a singly linked list, remove all the nodes in the list which have any node on their right whose value is greater. 
    (Not just immediate Right , but entire List on the Right)


    Input:
    LinkedList = 12->15->10->11->5->6->2->3
    Output: 15 11 6 3
    Explanation: Since, 12, 10, 5 and 2 are
    the elements which have greater elements
    on the following nodes. So, after deleting
    them, the linked list would like be 15,
    11, 6, 3.


    Input:
    LinkedList = 10->20->30->40->50->60
    Output: 60
    Explanation: All the nodes except the last
    node has a greater value node on its right,
    so all the nodes except the last node must
    be removed.
 

    Your Task:
    The task is to complete the function compute() which should modify the list as required and return the head of the modified linked list. 
    The printing is done by the driver code,

    Expected Time Complexity: O(N)
    Expected Auxiliary Space: O(1)


*/


function deleteNodeHavingGreaterValueAtRight(head) {

    // reverse the LL    
    let prev = head
    let curr = head.next
        
    while(curr) {
        
        let nextNode = curr.next
        curr.next = prev
        
        prev = curr
        curr = nextNode
        
    }
    
    head.next = null
    head  = prev
    

    // filtered LL
    let maxEle = head.data
    curr = head
    

    while(curr.next && curr.next.data) {
        
        if(curr.next.data > maxEle) {
            maxEle = curr.next.data
            curr = curr.next
        }
        
        else if (curr.next.data < maxEle) {
            curr.next = curr.next.next
        }
        
    }
    

    // reverse back to original
    prev = head
    curr = head.next
    

    while(curr) {
        
        const newNext = curr.next
        curr.next = prev
        
        prev = curr
        curr = newNext
        
    }
    
    head.next = null
    head = prev
    
    return head
    
}



function deleteNodeHavingGreaterValueAtRightII(head) {

    // reverse the LL
    function reverseList (headNode) {
            
        let prev = headNode
        let curr = headNode.next
        
        
        while(curr) {
            
            let nextNode = curr.next
            curr.next = prev
            
            prev = curr
            curr = nextNode
            
        }
        
        headNode.next = null
        headNode  = prev
        
        return headNode
    }
    
    
    head = reverseList(head)
    
    
    // filtered LL
    let maxEle = head.data
    
    let curr = head
    
    while(curr.next) {
        
        if(curr.next.data >= maxEle) {
            maxEle = curr.next.data
            curr = curr.next
        }
        
        else if (curr.next.data < maxEle) {
            curr.next = curr.next.next
        }
        
    }
    
    
    head = reverseList(head)
    
    return head
    
}


