/*
    Insert an Element at the Bottom of a Stack

    You are given a stack st of n integers and an element x. You have to insert x at the bottom of the given stack. 

    Note: Everywhere in this problem, the bottommost element of the stack is shown first while priniting the stack.


    Input:
    n = 5
    x = 2
    st = {4,3,2,1,8}
    Output:
    {2,4,3,2,1,8}
    Explanation:
    After insertion of 2, the final stack will be {2,4,3,2,1,8}.


    
    Input:
    n = 3
    x = 4
    st = {5,3,1}
    Output:
    {4,5,3,1}
    Explanation:
    After insertion of 4, the final stack will be {4,5,3,1}.


    Your Task:
    You don't need to read input or print anything. Your task is to complete the function insertAtBottom() which takes a stack st and an integer x as inputs and returns the modified stack after insertion.

    Expected Time Complexity: O(n)
    Expected Auxiliary Space: O(n)

*/


function insertAtTheBottomOfTheStack(st, x) {
    return insert(st,x)

    function insert(st, x) {
    
        // Recursive Solution
        if(st.length == 0) {
            st.push(x)
            return
        }
        const temp = st.pop()
        insert(st, x)
        st.push(temp)
        return stack
    }
}



function insertAtTheBottomOfTheStackII(st, x) {

    let tempStack = []
        
    tempStack[0] = x

    for(let i=0; i<st.length; i++) {
        tempStack.push(st[i])
        // tempStack[i+1] = st[i]
    }

    // st.unshift(x) // Add at the begnning of an array
    // return [x,...st]  // Destructure the array

    return tempStack    

}



let stack = [2, 3, 4, 5, 6, 7, 8]
const res = insertAtTheBottomOfTheStack(stack, 1)

console.log(res)


