/*

*/


function longestPalindromicSubstr(s) {

    if(s.length <= 1) {
        return s
    }

    let LPS = ''

    for(let i=1; i<s.length; i++) {

        // odd length palindrome
        let low = i, high = i

        while(low >= 0 && high < s.length && s[low] == s[high]) {
            low--, high++
        }

        let substr = s.substring(low + 1, high)
        // low and high should be exculded --> Think.. 
        // low and high pointers are shifted from palindrome, then only while loop exited
        
        /*
            substr = ''
            for(let i=low+1; i<high; i++) {
                substr += s[i]
            }
        */

        if(substr.length > LPS.length) {
            LPS = substr
        }

        // even length palindrome
        low = i-1, high = i

        while(low >= 0 && high < s.length && s[low] == s[high]) {
            low-- , high++
        }

        substr = s.substring(low + 1, high)
        

        if(substr.length > LPS.length) {
            LPS = substr
        }

    }

    return LPS

}



let s = "babad"
// let s = "cbbd"
const res = longestPalindromicSubstr(s)
console.log(res)


