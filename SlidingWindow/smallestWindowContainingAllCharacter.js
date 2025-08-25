/*

    Smallest window containing all characters --> (Hard)

    Given two strings s1 and s2. Find the smallest window in the string s1 consisting of all the characters(including duplicates) of the string s2. return empty string in case no such window is present.
    If there are multiple such windows of the same length, return the one with the least starting index.
    Note: All characters are in lowercase letters. 

    Examples:
    Input: s1 = "timetopractice", s2 = "toc"
    Output: "toprac"
    Explanation: "toprac" is the smallest substring in which "toc" can be found.
    
    Input: s1 = "zoomlazapzo", s2 = "oza"
    Output: "apzo"
    Explanation: "apzo" is the smallest substring in which "oza" can be found.
    
    Input: s1 = "zoom", s2 = "zooe"
    Output: ""
    Explanation: No window is present containing all characters of s2.


    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(1)
 

*/

function smallestWindow(s1, s2) { // O(n*n)

    function hasAllChars(s, p) {

        const count = new Array(256).fill(0)

        for(let ch of p) {
            count[ch.charCodeAt(0)]++
        }

        for(let ch of s) {
            if(count[ch.charCodeAt(0)] > 0) {
                count[ch.charCodeAt(0)]--
            }
        }

        // if all counts in the count array are zero, the substring contains all the char of the pattern
        for(let val of count) {
            if(val > 0) return false
        }

        return true
    }

    let minLen = Infinity, res = ''

    for(let i=0; i<s1.length; i++) {

        for(let j=i+1; j<s1.length; j++) {
            const subStr = s1.substring(i, j+1)

            if(hasAllChars(subStr, s2)){
                const currLen = subStr.length
                if(currLen < minLen) {
                    minLen = currLen
                    res = subStr
                }
            }
        }
    }

    return res

}


let s1 = "timetopractice"
let s2 = "toc"
const res = smallestWindow(s1, s2)
console.log(res)
