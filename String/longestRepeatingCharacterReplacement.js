/*
    424. Longest Repeating Character Replacement --> (Medium)

    You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
    Return the length of the longest substring containing the same letter you can get after performing the above operations.


    Example 1:
    Input: s = "ABAB", k = 2
    Output: 4
    Explanation: Replace the two 'A's with two 'B's or vice versa.


    Example 2:
    Input: s = "AABABBA", k = 1
    Output: 4
    Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
    The substring "BBBB" has the longest repeating letters, which is 4.
    There may exists other ways to achieve this answer too.


    Constraints:
    1 <= s.length <= 105
    s consists of only uppercase English letters.
    0 <= k <= s.length


*/


function longestRepeatingCharacterReplacement(str, k) {

    let freq = new Array(26).fill(0)

    let left = 0, maxFreq = 0, maxWindow = 0

    for(let right=0; right<str.length; right++) {

        freq[str[right].charCodeAt(0) - 'A'.charCodeAt(0)]++

        maxFreq = Math.max(maxFreq, freq[str[right].charCodeAt(0) - 'A'.charCodeAt(0)])

        let windowLen = right - left + 1

        if((windowLen - maxFreq) > k) {
            freq[str[left].charCodeAt(0) - 'A'.charCodeAt(0)]--
            left++
        }

        windowLen = right - left + 1

        maxWindow = Math.max(windowLen, maxWindow)
    }

    return maxWindow

}



function longestRepeatingCharacterReplacementI(str, k) {

    let freq = {}

    let left = 0, maxFreq = 0, maxWindow = 0

    for(let right=0; right<str.length; right++) {

        freq[str[right]] = ( freq[str[right]] | 0 ) + 1

        maxFreq = Math.max(maxFreq, freq[str[right]])
        let windowLen = right - left + 1

        if((windowLen - maxFreq) > k) {
            freq[str[left]]--
            left++
        }   

        windowLen = right - left + 1

        maxWindow = Math.max(windowLen, maxWindow)
    }   

    return maxWindow

}


function longestRepeatingCharacterReplacementII(str, k) {

    let freq = new Map()

    let left = 0, maxFreq = 0, maxWindow = 0

    for(let right=0; right<str.length; right++) {

        freq.set(str[right], ( freq.get(str[right]) | 0 ) + 1)

        maxFreq = Math.max(maxFreq, freq.get(str[right]))
        let windowLen = right - left + 1

        if((windowLen - maxFreq) > k) {
            freq.set(str[left], freq.get(str[left]) - 1)
            left++
        }   

        windowLen = right - left + 1
        maxWindow = Math.max(windowLen, maxWindow)
    }

    return maxWindow

}



// let s = "ABAB"
// let k = 2

let s = "AABABBA"
let k = 1
const res = longestRepeatingCharacterReplacement(s, k)
console.log(res)



