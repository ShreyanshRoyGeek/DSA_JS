/*

Delete Alternate Nodes  --> LinkedList (Basic)

    Given a Singly Linked List of size n, delete all alternate nodes of the list.

    Input:
    LinkedList: 1->2->3->4->5->6
    Output: 1->3->5
    Explanation: Deleting alternate nodes results in the linked list with elements 1->3->5

    Input:
    LinkedList: 99->59->42->20
    Output: 99->42

    Your Task:
    Your task is to complete the function deleteAlt() which takes the head of the linked list in the input parameter and modifies the given linked list accordingly.
    
    Expected Time Complexity: O(n)
    Expected Auxiliary Space: O(1)

*/


function deleteAlternateNodes(head) {

    let curr = head

    while(curr && curr.next) {
        curr.next = curr.next.next    
        curr = curr.next
    }
    
    return head
}

