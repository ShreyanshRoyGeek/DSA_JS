
function longestSubStrDistinctChars(s) {

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



function longestSubStrDistinctCharsII(s) {

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




// Example usage:
// const s = "abcabcbb"
// const s = "pwwkew"
const s = "geeksforgeeks"

console.log(longestSubStrDistinctCharsII(s)); // Output: "abc"

