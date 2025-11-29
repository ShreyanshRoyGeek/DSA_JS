
function longestSubStrOfDistinctChars(s) {

    let maxSubstrLength = 0
    let longestSubstr = ""

    for(let i=0; i<s.length; i++) {

        let subStr = ""
        
        for(let j=i; j<s.length; j++) {
            if(subStr.indexOf(s[j]) === -1) {
                subStr += s[j]
            }
            else {
                break
            }
        }

        if(subStr.length > maxSubstrLength) {
            longestSubstr = subStr
            maxSubstrLength = subStr.length
        }


    }

    return {maxSubstrLength, longestSubstr}
}



function longestSubStrOfDistinctCharsI(s) { // O(n^2) - time and O(n) - space

    let maxSubstrLength = 0
    
    for(let i=0; i<s.length; i++) {
        
        let subStrSet = new Set()
        
        for(let j=i; j<s.length; j++) {

            if(!subStrSet.has(s[j])) {
                subStrSet.add(s[j])
            } 
            else {
                break
            }
            
        }

        if(subStrSet.size > maxSubstrLength) {

            longestSubstr = subStrSet
            maxSubstrLength = subStrSet.size

        }

    }

    return {maxSubstrLength, longestSubstr}
}


function longestSubStrOfDistinctCharsII(s) { // O(n) - time and O(1) - space

    let map = new Map()

    let left = 0, maxCharCount = 0

    for(let right=0; right<s.length; right++) {

        while(map.has(s[right])) {
            map.delete(s[left])
            left++
        }

        map.set(s[right])
        maxCharCount =  Math.max(maxCharCount, (right - left + 1))

    }

    return maxCharCount

}



// Example usage:
const s = "abcabcbb"
// const s = "pwwkew"
// const s = "geeksforgeeks"

console.log(longestSubStrOfDistinctCharsII(s)); // Output: "abc"

