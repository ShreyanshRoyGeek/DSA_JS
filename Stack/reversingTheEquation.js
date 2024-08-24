/*
    Reversing the equation --> Stack (Easy)

    Given a mathematical equation that contains only numbers and +, -, *, /. Print the equation in reverse, such that the equation is reversed, but the numbers remain the same.
    It is guaranteed that the given equation is valid, and there are no leading zeros.


    Input:
    S = "20-3+5*2"
    Output: 2*5+3-20
    Explanation: The equation is reversed with
    numbers remaining the same.


    Input: 
    S = "5+2*56-2/4"
    Output: 4/2-56*2+5
    Explanation: The equation is reversed with
    numbers remaining the same.


    Your Task:
    You don't need to read input or print anything. 
    Your task is to complete the function reverseEqn() which takes the string S representing the equation as input and returns the resultant string representing the equation in reverse.

    
    Expected Time Complexity: O(|S|).
    Expected Auxiliary Space: O(|S|).


*/


function reversingTheEquation(s) {

    let stack = []

    let revStr = ''

    for (let i = s.length - 1; i >= 0; i--) {

        if (s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/') {

            while (stack.length > 0) {
                revStr += stack.pop()
            }
            revStr += s[i]
        }
        else {

            stack.push(s[i])
        }
    }

    while (stack.length > 0) {
        revStr += stack.pop()
    }

    return revStr

}


