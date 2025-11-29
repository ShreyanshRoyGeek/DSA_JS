/*

    Given an integer x, return true if x is a palindrome, and false otherwise.

    Example 1:
    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.
    
    Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    
    Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


    Constraints:
    -231 <= x <= 231 - 1

    Follow up: Could you solve it without converting the integer to a string?

*/




function isPalindrome(n) {

    let num = n
    let temp = 0

    while(num > 0) {

        const rem = num % 10
        
        temp = (temp * 10) + rem

        num = Math.floor(num/10)

    }

    if(temp == n) return true

    else return false
    
}


// let n = 121
let n = -121
const out = isPalindrome(n)
console.log(out)




function flattensTheArray(arr) {

    let temp = []

    flatArray(arr)

    function flatArray(arr) {

        for(let i=0; i<arr.length; i++) {
    
            if(Array.isArray(arr[i])) {
                flatArray(arr[i])
            }
            else {
                temp.push(arr[i])
            }
        }
    }

    return temp

}


// let arr = [1,2, [2,3], [4,5], [5,6,[7,8]]]
// const res = flattensTheArray(arr)
// console.log(res)

