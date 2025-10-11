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

    if(st.length == 0) return 

    const num = st.pop()

    // recursion
    sortAStack(st)

    sortedIndex(st, num)

    function sortedIndex(st, num) {

        if(st.length == 0) return

        if(st.length == 0 || st[st.length -1] < num) {
            st.push(num)
            return
        }

        const temp = st.pop()

        // recursion
        sortedIndex(st, num)

        st.push(temp)

    }
 
}


let st = [41, 3, 32, 2, 11]
const res = sortAStack(st)
console.log(st)

