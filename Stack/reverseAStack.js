/*
    Reverse a Stack --> (Medium)

    Examples:

    Input: st[] = [1, 2, 3, 4]
    Output: [1, 2, 3, 4]
    Explanation: After reversing, the elements of stack are in opposite order.


    Input: st[] = [3, 2, 1]
    Output: [3, 2, 1]
    Explanation: After reversing, the elements of stack are in opposite order.


    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(n)

*/


function reverseAStack(st) {

    let temp = []


    while(st.length > 0) {
        temp.push(st.pop())
    }

    return temp
}


function reverseAStackUsingRecursion(st) {

    if(st.length == 0) return

    const temp = st.pop()

    // recursion
    reverseAStackUsingRecursion(st)

    insertAtTheBottomOfTheStack(temp)


    function insertAtTheBottomOfTheStack(temp) {

        if(st.length == 0) {
            st.push(temp)
            return
        }

        else {
            const num = st.pop()

            insertAtTheBottomOfTheStack(temp)

            st.push(num)
        }

    }

}



let st = [1, 2, 3, 4]
reverseAStackUsingRecursion(st)
console.log(st)

