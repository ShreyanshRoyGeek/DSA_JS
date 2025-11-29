/*

    Special Stack --> (Easy)

    Design a data-structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(), isFull() and an additional operation getMin() which should return the minimum element from the SpecialStack. 
    Your task is to complete all the functions, using a stack data structure.

    Note: The output of the code will be the value returned by getMin() function.

    Examples:
    Input: stack: 18 19 29 15 16
    Output: 15
    Explanation: The minimum element of the stack is 15.


    Input: stack: 34 335 1814 86
    Output: 34
    Explanation: The minimum element of the stack is 34.


    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(1)

*/


function specialStack() {

    let stack = []


    function push(x) {
        stack.push(x)
    }


    function pop() {
        stack.pop()
    }


    function isFull() {

        if(stack.length  == 4) return true

        return false
    }


    function isEmpty() {

        if(stack.length == 0) return true

        return false

    }

    
    function getMin() {




    }

}


