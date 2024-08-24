/*

    Intersection of two sorted Linked lists
    Given two linked lists sorted in increasing order, create a new linked list representing the intersection of the two linked lists.
    The new linked list should be made with without changing the original lists.

    Note: The elements of the linked list are not necessarily distinct.


    Input:
    LinkedList1 = 1->2->3->4->6
    LinkedList2 = 2->4->6->8
    Output: 2 4 6
    Explanation: For the given two
    linked list, 2, 4 and 6 are the elements
    in the intersection.


    Input:
    LinkedList1 = 10->20->40->50
    LinkedList2 = 15->40
    Output: 40


    Your Task:
    You don't have to take any input of print anything. Your task is to complete the function findIntersection(), which will take head of both of the linked lists as input and should find the intersection of two linked list and add all the elements in intersection to the third linked list and return the head of the third linked list.

    Expected Time Complexity : O(n+m)
    Expected Auxilliary Space : O(n+m)
    Note: n, m are the size of the respective linked lists.
    

*/


function intersectionOfTwoSortedLL() {

    let curr = head1
        
    let hashTable = {}
    
    while(curr) {
        
        hashTable[curr.data] = (hashTable[curr.data] || 0) + 1
        
        curr = curr.next
    }
        
        
    curr = head2
    
    let thirdList = new Node(0)
    let currNew = thirdList
    
    
    while(curr) {
        
        if(hashTable[curr.data] > 0) {
            
            const newNode = new Node(curr.data)
            currNew.next = newNode
            currNew = currNew.next
            
            hashTable[curr.data] = hashTable[curr.data] - 1
            
        }
        
        curr = curr.next
        
    }

    thirdList = thirdList.next
    
    return thirdList

}