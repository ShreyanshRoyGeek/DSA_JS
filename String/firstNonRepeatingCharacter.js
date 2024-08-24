/*


Given a string S consisting of lowercase Latin Letters. 
Return the first non-repeating character in S. If there is no non-repeating character, return '$'.


Input:
S = hello
Output: h
Explanation: In the given string, the
first character which is non-repeating
is h, as it appears first and there is
no other 'h' in the string.


Input:
S = zxvczbtxyzvy
Output: c
Explanation: In the given string, 'c' is
the character which is non-repeating. 


Expected Time Complexity: O(N).
Expected Auxiliary Space: O(Number of distinct characters).
Note: N = |S|


*/


function firstNonRepeatingCharacter(s) { // O(n^2) - time

    for(let i=0; i<s.length; i++){

        let count = 1

        for(let j=i+1; j<s.length; j++) {

            if(s[i] == s[j]) {
                count++
            }
        }

        if(count == 1) {
            return s[i]
        }

    }

    return '$'
}



function firstNonRepeatingCharacterOptimized(s) { // O(n) - time & O(1) - space as constant auxiliary space
     
    let countArr = new Array(26).fill(0)
        
    for(let i=0; i<s.length; i++) {
        
        countArr[s[i].charCodeAt() - 'a'.charCodeAt()]++
        
    }
    
    for(let i=0; i<s.length; i++) {
        
        if(countArr[s[i].charCodeAt() - 'a'.charCodeAt()] == 1) {
            return s[i]
        }
        
    }
    
    return '$'
}


let driverStr = "zxvczbtxyzvy"

console.log(firstNonRepeatingCharacter(driverStr))


