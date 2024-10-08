/*
    Delete a Node in Single Linked List

    Given a singly linked list and an integer x.Delete xth node from the singly linked list.


    Input: 1 -> 3 -> 4 
    x = 3
    Output: 1 -> 3
    Explanation:
    After deleting the node at 3rd
    position (1-base indexing), the
    linked list is as 1 -> 3. 


    Input: 1 -> 5 -> 2 -> 9 
    x = 2
    Output: 1 -> 2 -> 9
    Explanation: 
    After deleting the node at 2nd
    position (1-based indexing), the
    linked list is as 1 -> 2 -> 9.


    Your task: Your task is to complete the method deleteNode() which takes two arguments: 
    the address of the head of the linked list and an integer x. 
    The function returns the head of the modified linked list.


*/


function deleteANode(head, x) {
    let curr = head
        
    if(x == 1) {
        head = curr.next
        return head
    }
    
    for(let i=2; i<x; i++) {
        curr = curr.next
    }
    
    curr.next = curr.next.next

    return head
}