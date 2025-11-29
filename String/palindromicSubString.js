/*

    Palindromic SubString --> (Medium)

    Given a string s, return the number of palindromic substrings in it.
    A string is a palindrome when it reads the same backward as forward.
    A substring is a contiguous sequence of characters within the string.

    
    Example 1:
    Input: s = "abc"
    Output: 3
    Explanation: Three palindromic strings: "a", "b", "c".
    

    Example 2:
    Input: s = "aaa"
    Output: 6
    Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


    Constraints:
    1 <= s.length <= 1000
    s consists of lowercase English letters.

*/



function palindromicSubString(s) {

    let res = []
    
    for(let i=0; i<s.length; i++) {
        let str = ''

        for(let j=i; j<s.length; j++) {
            str += s[j]

            let l = 0, r = str.length -1
            let isPalindrome = true

            while(l<r) {
                if(s[l] !== s[r]) {
                    isPalindrome = false
                    break
                }
                l++, r--
            }
            
            if(isPalindrome) {
                res.push(str)
            }
        }

    }

    return res

}





// let s = "abc"
let s = "aaa"
const res = palindromicSubString(s)
console.log(res)


