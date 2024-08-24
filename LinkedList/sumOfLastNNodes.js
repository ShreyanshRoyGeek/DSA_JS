/*

    Find the Sum of Last N nodes of the Linked List

    Given a single linked list, calculate the sum of the last N nodes.

    Input:
    N = 3
    5 9 6 3 4 10
    Output:
    17
    Explanation:
    Sum of last three nodes in the linked list is 3 + 4 + 10 = 17.

    Input:
    N = 2
    1 2
    Output:
    3
    Explanation:
    Sum of last two nodes in the linked list is 2 + 1 = 3

    Your Task:
    You don't need to read input or print anything. 
    Your task is to complete the function sumOfLastN_Nodes(), which takes two arguments as input,
    the reference pointer to the head of the linked list and the integer N. 
    Return an Integer which is the sum of last N nodes.


*/


function sumOfLastNNodes(head, n) { // n --> last n number of nodes

    let curr = head
    let sum = 0

    function getSize(node) {

        let curr = node
        let count = 0

        while (curr) {
            count++
            curr = curr.next
        }
        return count
    }

    const noOfNodes = getSize(head)
    let noOfSkip = noOfNodes - n
    let skipNode = noOfSkip

    while (noOfSkip > 0) {
        
        curr = curr.next
        noOfSkip--
    }

    for (let i = skipNode; i < noOfNodes; i++) {

        sum += curr.data
        curr = curr.next
    }

    return sum

}