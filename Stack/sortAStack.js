/*
    Sort a stack --> (Medium)

    Given a stack of integers st[]. Sort the stack in ascending order (smallest element at the bottom and largest at the top).

    Examples:

    Input: st[] = [1, 2, 3]
    Output: [3, 2, 1]
    Explanation: The stack is already sorted in ascending order.

    Input: st[] = [41, 3, 32, 2, 11]
    Output: [41, 32, 11, 3, 2]
    Explanation: After sorting, the smallest element (2) is at the bottom and the largest element (41) is at the top.


    Expected Complexities
    Time Complexity: O(n^2)
    Auxiliary Space: O(n)


*/


function sortAStack(st) {

    let arr = []

    for(let i=0; i<st.length; i++) {
        arr.push(st[i])
    }

    arr = arr.sort((a,b) => b-a)

    while(st.length > 0) st.pop()

    for(let i=0; i<arr.length; i++) {
        st.push(arr[i])
    }

    return st
}



// Using temp stack
function sortAStackII(st) { // O(n^2) time and O(n) space
 
    let tempStack = []

    while(st.length > 0) {

        let temp = st.pop()

        while(tempStack.length > 0 && tempStack[tempStack.length-1] < temp) {
            st.push(tempStack[tempStack.length-1])
            tempStack.pop()
        }

        tempStack.push(temp)

    }

    return tempStack

}


function sortAStackUsingRecursion(st) {
    sortStack(st)

    function sortStack(st) {

        if(st.length == 0) return 

        const num = st.pop()

        // recursive call
        sortStack(st)


        sortedInsert(st, num)

        return st
    }

    
    function sortedInsert(st, num) {

        if(st.length == 0 || st[st.length -1] < num) {
            st.push(num)
            return
        }

        const temp = st.pop()

        // recursive call
        sortedInsert(st, num)

        st.push(temp)

    }

}



// let st = [1, 2, 3]
let st = [41, 3, 32, 2, 11]
const res = sortAStackUsingRecursion(st)
console.log(st)

