/*
    Find length of Loop --> LL (Easy)

    Given a linked list of size N. The task is to complete the function countNodesinLoop() that checks whether a given Linked List contains a loop or not and if the loop is present then return the count of nodes in a loop or else return 0. 
    C is the position of the node to which the last node is connected. If it is 0 then no loop.

    Input:
    N = 10
    value[]={25,14,19,33,10,21,39,90,58,45}
    C = 4
    Output: 7
    Explanation: The loop is 45->33. So length of loop is 33->10->21->39-> 90->58->45 = 7. The number 33 is connected to the last node to form the loop because according to the input the 4th node from the beginning(1 basedindex) will be connected to the last node for the loop.

    Input:
    N = 2
    value[] = {1,0}
    C = 1
    Output: 2
    Explanation: The length of the loop
    is 2.


    Your Task:
    The task is to complete the function countNodesinLoop() which contains the only argument as reference to head of linked list and return the length of the loop ( 0 if there is no loop).

    Expected Time Complexity: O(N)
    Expected Auxiliary Space: O(1)


*/


function findLengthOfTheLoop(head) {

    let slow = head
    let fast = head

    let count = 1

    while(fast !== null && fast.next !== null) {

        slow = slow.next
        fast = fast.next.next
        
        if(slow == fast) {
            fast = fast.next
            while(slow !== fast) {
                fast = fast.next
                count++
            }
            return count
        }
    }

    return 0

}