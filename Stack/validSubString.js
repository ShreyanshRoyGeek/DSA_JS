/*

    Valid Substring --> (Medium)

    Given a string s consisting only of opening and closing parentheses '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

    Note: The length of the smallest valid substring "()" is 2.

    Examples:
    Input: s = "(()("
    Output: 2
    Explanation: The longest valid substring is "()". Its length is 2. 

    Input: s = "()(())("
    Output: 6
    Explanation: The longest valid substring is "()(())". Its length is 6.

    Input: s = "(()())"
    Output: 6
    Explanation: The longest valid substring is "(()())". Its length is 6.


    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(1)

*/




function validSubString(st) {

    const temp = []

    let validCount = 0
    // let isValidStr = true

    for(let i=0; i<st.length; i++) {

        if(st[i] == '(' || st[i] == '{' || st[i] == '[') temp.push(st[i])

        else {
            const cur = temp.pop()

            if((st[i] == ')' && cur == '(') || (st[i] == '}' && cur == '{') || (st[i] == ']' && cur == '[')) {
                validCount = validCount + 2
            }

            else {
                // isValidStr = false
                break
            }
        }

        // if(!isValidStr)  break
        // if(!isValidStr) return validCount
        
    }

    return validCount

}



function validSubStringNew(st) {

    const temp = []
    temp.push(-1)
    let maxCount = 0

    for(let i=0; i<st.length; i++) {
        if(st[i] == '(') temp.push(i)

        else {
            temp.pop()
            if(temp.length !== 0) maxCount = Math.max(maxCount, i - temp[temp.length -1])
            
            else temp.push(i)
        }
    }

    return maxCount

}


let str = "()(())("
str = "()))()()((())"
// str = "(()()((())"
// str = "(()("
// str = "(()())"
const res = validSubStringNew(str)

console.log(res)



