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



function palindromicSubStringI(s) {

    let resCount = 0, res = [], longestSubstr = '', longestSubstrLen = 0

    for(let i=0; i<s.length; i++) {

        // calculate odd length palindrome
        resCount += findPalindrome(s, i, i)

        // calculate even length palindrome
        resCount += findPalindrome(s, i, i+1)

    }


    function findPalindrome(s, l, r) {

        let count = 0

        while(l >= 0 && r < s.length && s[l] == s[r]) {
            count++

            let str = ''
            for(let i=l; i<=r; i++) {
                str += s[i]
            }

            if(str.length > longestSubstrLen) {
                longestSubstr = str
                longestSubstrLen = str.length
            }

            res.push(str)

            l--, r++
        }

        return count
    }

    return { res, resCount, longestSubstr, longestSubstrLen }
    
}





// let s = "abc"
let s = "aaa"
const resCount = palindromicSubStringI(s)
console.log(resCount)


