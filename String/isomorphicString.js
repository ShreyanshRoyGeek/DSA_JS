/*

    Isomorphic Strings --> (Easy)

    Given two strings s1 and s2 consisting of only lowercase English letters and of equal length, check if these two strings are isomorphic to each other.
    If the characters in s1 can be changed to get s2, then two strings, s1 and s2 are isomorphic. A character must be completely swapped out for another character while maintaining the order of the characters. 
    A character may map to itself, but no two characters may map to the same character.


    Examples:

    Input: s1 = "aab", s2 = "xxy"
    Output: true
    Explanation: Each character in s1 can be consistently mapped to a unique character in s2 (a → x, b → y).

    Input: s1 = "aab", s2 = "xyz"
    Output: false
    Explanation: Same character 'a' in s1 maps to two different characters 'x' and 'y' in s2.

    Input: s1 = "abc", s2 = "xxz"
    Output: false
    Explanation: Two different characters 'a' and 'b' in s1 maps with same character 'x' in s2. 



    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(1)

*/


function isIsomorphicString(s1, s2) { // Not working 

    if (s1.length !== s2.length) return false

    let table1 = {}, table2 = {}

    for (let i = 0; i < s1.length; i++) {
        table1[s1[i]] = (table1[s1[i]] || 0) + 1
    }

    for (let i = 0; i < s2.length; i++) {
        table2[s2[i]] = (table2[s2[i]] || 0) + 1
    }

    let values1 = Object.values(table1)
    let values2 = Object.values(table2)

    if (values1.length !== values2.length) return -1

    /*for(let ele in table1) {
        if(table1[ele] !== table2[ele]) return false
    }*/

    // console.log(values1)
    // console.log(values2)

    for (let i = 0; i < values1.length; i++) {
        if (values1[i] !== values2[i]) return false
    }

    return true
}


function areIsomorphicString(str1, str2) {

    let freq1 = {}
    let freq2 = {}

    if (str1.length !== str2.length) {
        return 0
    }


    for (let i = 0; i < str1.length; i++) {

        // console.log(freq1[str1[i]])
        // console.log(freq2[str2[i]])

        if (freq1[str1[i]] !== freq2[str2[i]]) {
            return 0
        }

        freq1[str1[i]] = i
        freq2[str2[i]] = i
    }


    return 1

}

let str1 = "aaba"
let str2 = "xxyz"

const res = isIsomorphicString(str1, str2)
console.log(res)


