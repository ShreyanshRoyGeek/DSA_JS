/*
    Remove duplicates from an unsorted linked list  --> LL (Easy)

    Given an unsorted linked list of N nodes. The task is to remove duplicate elements from this unsorted Linked List. 
    When a value appears in multiple nodes, the node which appeared first should be kept, all others duplicates are to be removed.

    Input:
    N = 4
    value[] = {5,2,2,4}
    Output: 5 2 4
    Explanation:Given linked list elements are
    5->2->2->4, in which 2 is repeated only.
    So, we will delete the extra repeated
    elements 2 from the linked list and the
    resultant linked list will contain 5->2->4


    Input:
    N = 5
    value[] = {2,2,2,2,2}
    Output: 2
    Explanation:Given linked list elements are
    2->2->2->2->2, in which 2 is repeated. So,
    we will delete the extra repeated elements
    2 from the linked list and the resultant
    linked list will contain only 2.


    Your Task:
    You have to complete the method removeDuplicates() which takes 1 argument: the head of the linked list.  
    Your function should return a pointer to a linked list with no duplicate element.


    Expected Time Complexity: O(N)
    Expected Auxiliary Space: O(N)


*/

function removeDuplicateFromUnsortedLL(head) {  // 0(n^2) solution

    if (!head) return

    let curr = head

    while (curr) {

        let newCurr = curr.next

        while (newCurr) {

            if (curr.data == newCurr.data) {

                if (newCurr.next && newCurr.next.next) {
                    newCurr.next = newCurr.next.next // delete duplicate node
                }
                else {
                    newCurr.next = null
                }
            }
            else {
                newCurr = newCurr.next
            }

        }

        curr = curr.next

    }

    return head
}



function removeDuplicateFromUnsortedLLNew(head) {  // 0(n) solution

    if (!head) return

    let table = {}

    let newList = new Node(0)

    let newListCurr = newList

    let curr = head

    while (curr) {

        if (!table[curr.data]) {

            const newNode = new Node(curr.data)
            newListCurr.next = newNode
            newListCurr = newListCurr.next

            table[curr.data] = true
        }

        curr = curr.next
    }

    newList = newList.next

    return newList

}

