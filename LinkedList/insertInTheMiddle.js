/*

    Insert in Middle of Linked List --> Linked List (Basic)

    Given a linked list of size N and a key. 
    The task is to insert the key in the middle of the linked list.

    Input:
    LinkedList = 1->2->4
    key = 3
    Output: 1 2 3 4
    Explanation: The new element is inserted
    after the current middle element in the
    linked list.


    Input:
    LinkedList = 10->20->40->50
    key = 30
    Output: 10 20 30 40 50
    Explanation: The new element is inserted
    after the current middle element in the
    linked list and Hence, the output is
    10 20 30 40 50.

    Your Task:
    The task is to complete the function insertInMiddle() which takes head reference and element to be inserted as the arguments. The printing is done automatically by the driver code.

    Expected Time Complexity : O(N)
    Expected Auxilliary Space : O(1)

*/

function insertInTheMiddle(head, x) { // x --> data

    const node = {
        data : x,
        next : null
    }

    // const node = new Node(x)

    let slow = head
    let fast = head
    
    while(fast.next != null && fast.next.next != null) { // Need to analyze once more
        slow = slow.next
        fast = fast.next.next
    }
    
    node.next = slow.next
    slow.next = node
    
    return head

}