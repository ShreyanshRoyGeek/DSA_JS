/*
    567. Permutation of String -> (Medium)

    Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. In other words, return true if one of s1's permutations is the substring of s2.

    Example 1:
    Input: s1 = "ab", s2 = "eidbaooo"
    Output: true
    Explanation: s2 contains one permutation of s1 ("ba").

    Example 2:
    Input: s1 = "ab", s2 = "eidboaoo"
    Output: false

    Constraints:
    1 <= s1.length, s2.length <= 104
    s1 and s2 consist of lowercase English letters.

*/



function checkInclusion(s1, s2) {
    let freq = new Array(26).fill(0)

    for(let i=0; i<s1.length; i++) {
        freq[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    let left = 0, count = s1.length

    for(let right=0; right<s2.length; right++) {
        if(freq[s2[right].charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
            count--
        }
        freq[s2[right].charCodeAt(0) - 'a'.charCodeAt(0)]--

        if(count === 0) {
            return true
        }           
        if(right - left + 1 === s1.length) {
            if(freq[s2[left].charCodeAt(0) - 'a'.charCodeAt(0)] >= 0) {
                count++
            }   

            freq[s2[left].charCodeAt(0) - 'a'.charCodeAt(0)]++
            left++
        }           
    }

    return false    
}




function checkInclusionI(s1, s2) {

    let freq = new Array(26).fill(0)

    for(let i=0; i<s1.length; i++) {
        freq[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for(let right=0; right<s2.length; right++) {

        let freqMap = new Array(26).fill(0)
        const len = s1.length
        let wordIndx = 0, indx = right

        while(wordIndx < len && indx < s2.length) {
            freqMap[s2[indx].charCodeAt(0) - 'a'.charCodeAt(0)]++
            wordIndx++, indx++
        }

        if(isCharSetSame(freq, freqMap)) {
            return true
        }
    }

    return false

}



function isCharSetSame(freq, freqMap) {

    for(let i=0; i<26; i++) {
        if(freq[i] !== freqMap[i]) {
            return false
        }
    }

    return true
}


let s1 = "ab", s2 = "eidabooo"
console.log(checkInclusion(s1, s2))

