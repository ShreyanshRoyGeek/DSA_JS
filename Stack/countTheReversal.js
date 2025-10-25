/*

    Count the Reversals --> (Medium)

    Given a string s consisting of only opening and closing curly brackets '{' and '}', find out the minimum number of reversals required to convert the string into a balanced expression. 
    A reversal means changing '{' to '}' or vice-versa.

    Examples:

    Input: s = "}{{}}{{{"
    Output: 3
    Explanation: One way to balance is:
    "{{{}}{}}". There is no balanced sequence
    that can be formed in lesser reversals.


    Input: s = "{{}{{{}{{}}{{"
    Output: -1
    Explanation: There's no way we can balance
    this sequence of braces


    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(1)

*/


function countTheReversal(s) {

    let stack = []
    let count = 0

    if(s.length % 2 == 1) return -1

    for(let i=0; i<s.length; i++) {

        if(s[i] == '{') {
            stack.push(s[i])
        }
        else {
            if(stack.length == 0) {
                stack.push('{')
                count++
            }
            else {
                stack.pop()
            }
        }

    }

    count = count + stack.length / 2

    return count

}



let str = "}{{}}{{{"
// str = "{{}{{{}{{}}{{"
const res = countTheReversal(str)

console.log(res)

