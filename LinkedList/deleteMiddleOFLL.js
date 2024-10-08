/*

    Delete Middle of Linked List

    Given a singly linked list, delete middle of the linked list. For example, if given linked list is 1->2->3->4->5 then linked list should be modified to 1->2->4->5.
    If there are even nodes, then there would be two middle nodes, we need to delete the second middle element. 
    For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.
    If the input linked list has single node, then it should return NULL.


    Input:
    LinkedList: 1->2->3->4->5
    Output: 
    1 2 4 5


    Input:
    LinkedList: 2->4->6->7->5->1
    Output: 
    2 4 6 5 1


    Your Task:
    The task is to complete the function deleteMid() which takes head of the linkedlist  and return head of the linkedlist with middle element deleted from the linked list. 
    If the linked list is empty or contains single element then it should return NULL.

    Expected Time Complexity: O(n).
    Expected Auxiliary Space: O(1).

    
*/



function deleteMiddleOfLL(head) {

    //your code here
    if(node==null || node.next==null) return null
  
    let slow=head
    let fast=head
    let prev=null // to keep trach slow before node

    while(fast!==null && fast.next!==null){
        fast=fast.next.next
        prev=slow
        slow=slow.next
    }
    
    // Remove the Middle
    prev.next=slow.next
    return node

}


