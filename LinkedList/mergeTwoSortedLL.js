/*
    Merge Two Sorted Linked List --> (Medium)

    Given the heads of two sorted linked lists list1 and list2, merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.    

    Return the head of the merged linked list.

    Example 1:
    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]

    Example 2:
    Input: list1 = [], list2 = []   
    Output: []

    Example 3:
    Input: list1 = [], list2 = [0]  
    Output: [0]

    Constraints:
    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100

*/


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


function mergeTwoSortedLL(list1, list2) {

    let node1 = list1
    let node2 = list2

    let arr1 = []
    let arr2 = []

    while(node1) {
        arr1.push(node1.val)
        node1 = node1.next 
    }

    while(node2) {
        arr2.push(node2.val)
        node2 = node2.next 
    }

    // console.log('data1', arr1)
    // console.log('data2', arr2)

    let i = 0, j = 0
    let resArr = []

    let m = arr1.length, n = arr2.length

    while(i<m && j<n) {

        if(arr1[i] < arr2[j]) {
            resArr.push(arr1[i])
            i++
        }
        else {
            resArr.push(arr2[j])
            j++
        }

    }

    while(i<m) {
        resArr.push(arr1[i])
        i++
    }

    while(j<n) {
        resArr.push(arr2[j])
        j++
    }

    // console.log(resArr)

    // create a new linked list from the resArr
    let dummy = new ListNode(0)
    let current = dummy

    for(let i=0; i<resArr.length; i++) {
        current.next = new ListNode(resArr[i])
        current = current.next
    }       

    return dummy.next

}


function mergeTwoSortedLLRecursive(list1, list2) {

    if(!list1) return list2
    if(!list2) return list1

    if(list1.val < list2.val) {
        list1.next = mergeTwoSortedLLRecursive(list1.next, list2)
        return list1
    }   
    else {
        list2.next = mergeTwoSortedLLRecursive(list1, list2.next)
        return list2
    } 
    
}

// Pointer approach to merge two sorted linked lists
function mergeTwoSortedLLIterative(list1, list2) {
    
    let dummy = new ListNode(0)
    let current = dummy

    while(list1 && list2) {

        if(list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        }
        else {
            current.next = list2
            list2 = list2.next
        }   

        current = current.next  

    }

    if(list1) {
        current.next = list1
    }

    if(list2) {
        current.next = list2
    }

    return dummy.next   
}


// Another iterative approach to merge two sorted linked lists
function mergeTwoSortedLLIterativeNew(list1, list2) {

    let dummy = new ListNode(0)
    let current = dummy

    while(list1 && list2){

        if(list1.val < list2.val) {
            current.next = new ListNode(list1.val)
            list1 = list1.next
        }
        else {
            current.next = new ListNode(list2.val)
            list2 = list2.next
        }

        current = current.next
    }

    while(list1) {
        current.next = new ListNode(list1.val)
        current = current.next
        list1 = list1.next
    }

    while(list2) {
        current.next = new ListNode(list2.val)
        current = current.next
        list2 = list2.next
    }

    return dummy.next
}


