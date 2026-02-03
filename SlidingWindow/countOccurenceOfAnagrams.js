/*
    Count occurence of anagrams --> (Medium)

    Given a word pat and a text txt. Return the count of the occurrences of anagrams of the word in the text.

    Example 1:
    Input: txt = "forxxorfxdofr", pat = "for"
    Output: 3
    Explanation: for, orf and ofr appears in the txt, hence answer is 3.

    Example 2:
    Input: txt = "aabaabaa", pat = "aaba"
    Output: 4
    Explanation: aaba is present 4 times in txt.

*/

function countOccurenceOfAnagrams(pat, txt) {

    let res = 0

    // 2 seperate count arr
    let count1 = new Array(26).fill(0)
    let count2 = new Array(26).fill(0)

    let k = pat.length

    for (let i = 0; i < pat.length; i++) {
        count1[pat[i].charCodeAt() - 'a'.charCodeAt()]++
    }

    for (let i = 0; i < k; i++) {
        count2[txt[i].charCodeAt() - 'a'.charCodeAt()]++
    }

    let isAnagram = true

    for (let i = 0; i < 26; i++) {
        if (count1[i] !== count2[i]) {
            isAnagram = false
            break
        }
    }

    if(isAnagram) res++

    for (let i = k; i < txt.length; i++) {

        // remove elem which is not part of curr window
        count2[text[i-k].charCodeAt() - 'a'.charCodeAt()]--

        // add new elem
        count2[text[i].charCodeAt() - 'a'.charCodeAt()]++

        let isAnagram = true

        for (let i = 0; i < 26; i++) {
            if (count1[i] !== count2[i]) {
                isAnagram = false
                break
            }
        }

        if(isAnagram) res++

    }

    return res

}



function countOccurenceOfAnagramsOptimized(pat, txt) {

    let count = new Array(26).fill(0) // single count arr

    let res = 0, k = pat.length

    for(let i=0; i<pat.length; i++) {
        count[pat[i].charCodeAt() - 'a'.charCodeAt()]++
    }

    // for window of size k
    for(let i=0; i<k; i++) {
        count[txt[i].charCodeAt() - 'a'.charCodeAt()]--
    }

    if(isAnagrams(count)) res++

    for(let i=k; i<txt.length; i++) {

        // remove elem which is not part of curr window
        count[txt[i-k].charCodeAt() - 'a'.charCodeAt()]++

        // add new elem
        count[txt[i].charCodeAt() - 'a'.charCodeAt()]--

        if(isAnagrams(count)) res++ 
    }

    return res

}


function isAnagrams(cnt) {

    for(let i=0; i<26; i++) {
        if(cnt[i] !== 0)  return false
    }

    return true
}



// let text = "forxxorfxdofr"
// let pattern = "for"

let text = "aabaabaa"
let pattern = "aaba"

console.log(countOccurenceOfAnagramsOptimized(pattern, text));


