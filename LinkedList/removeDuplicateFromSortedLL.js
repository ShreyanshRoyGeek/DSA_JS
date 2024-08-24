/*
    Remove duplicate element from sorted Linked List -->  Linked List (Easy)

    Given a singly linked list consisting of N nodes. 
    The task is to remove duplicates (nodes with duplicate values) from the given list (if exists).
    Note: Try not to use extra space. The nodes are arranged in a sorted way.

    Input:
    LinkedList: 2->2->4->5
    Output: 2 4 5
    Explanation: In the given linked list 
    2 ->2 -> 4-> 5, only 2 occurs more 
    than 1 time. So we need to remove it once.


    Input:
    LinkedList: 2->2->2->2->2
    Output: 2
    Explanation: In the given linked list 
    2 ->2 ->2 ->2 ->2, 2 is the only element
    and is repeated 5 times. So we need to remove
    any four 2.


    Your Task:
    The task is to complete the function removeDuplicates() which takes the head of input linked list as input.
    The function should remove the duplicates from linked list and return the head of the linkedlist.

    
    Expected Time Complexity : O(N)
    Expected Auxilliary Space : O(1)

*/

function removeDuplicateFromSortedLL(head) {

    if (!head) return

    let curr = head

    while (curr && curr.next) {

        if (curr.data == curr.next.data) {

            if (curr.next.next) {
                curr.next = curr.next.next  // delete node
            }
            else {
                curr.next = null
            }

        }

        else {
            curr = curr.next
        }

    }

    return head

}