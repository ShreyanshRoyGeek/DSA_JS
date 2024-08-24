
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1 
// Explanation: The answer is "b", with the length of 1.


// Input: s = "pwwkew"
// Output: 1 
// Explanation: The answer is "wke", with the length of 3.


function lengthOfLongestSubstring(s) {
    const n = s.length;
    let maxLength = 0; // Initialize the maximum length
    let start = 0; // Initialize the starting index of the substring

    // Initialize an array to store the index of each character
    const charIndexMap = Array(256).fill(-1);

    // Iterate through the string
    for (let end = 0; end < n; end++) {
        const currentChar = s.charCodeAt(end);

        // Update the starting index of the substring based on the character occurrence
        start = Math.max(start, charIndexMap[currentChar] + 1);

        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, end - start + 1);

        // Store the index of the current character
        charIndexMap[currentChar] = end;
    }

    return maxLength;
}



function lengthOfLongestSubstringUsingMap(s) {

    let maxLength = 0; // Initialize the maximum length
    let start = 0; // Initialize the starting index of the substring

    // Create a map to store the index of each character in the substring
    const charIndexMap = new Map();

    // Iterate through the string
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // Check if the current character is already in the substring
        if (charIndexMap.has(currentChar)) {
            // Update the starting index of the substring
            start = Math.max(start, charIndexMap.get(currentChar) + 1);
        }

        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, end - start + 1);

        // Store the index of the current character
        charIndexMap.set(currentChar, end);
    }

    return maxLength;
}



function longestSubstringWithoutRepeatingCharactersUsingMap(s) {

    let maxLength = 0; // Initialize the maximum length
    let start = 0; // Initialize the starting index of the substring
    let longestSubstring = ""; // Initialize the longest substring

    // Create a map to store the index of each character in the substring
    const charIndexMap = new Map();

    // Iterate through the string
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // Check if the current character is already in the substring
        if (charIndexMap.has(currentChar)) {
            // Update the starting index of the substring
            start = Math.max(start, charIndexMap.get(currentChar) + 1);
        }

        // Update the maximum length of the substring
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstring = s.substring(start, end + 1);
        }

        // Store the index of the current character
        charIndexMap.set(currentChar, end);
    }

    return longestSubstring;
}



function longestSubstringWithoutRepeatingCharactersUsingMapII(s) {

    let maxLength = 0; // Initialize the maximum length
    let start = 0; // Initialize the starting index of the substring
    let longestSubstring = ""; // Initialize the longest substring
    const charIndexMap = new Map(); // Map to store character indices

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar) + 1; // Update start to exclude repeated character
        }

        // console.log(charIndexMap.has(currentChar))

        charIndexMap.set(currentChar, end); // Update the index of current character

        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1; // Update maximum length
            longestSubstring = s.substring(start, end + 1); // Update longest substring
        }

        console.log("charIndexMap", charIndexMap)
    }

    return longestSubstring;
}



function longestSubstringWithoutRepeatingCharacters(s) {

    //let str = "pwwkew"

    const n = s.length;
    let maxLength = 0; // Initialize the maximum length
    let start = 0; // Initialize the starting index of the substring
    let longestSubstring = ""; // Initialize the longest substring

    // Initialize an array to store the index of each character
    const charIndexMap = Array(256).fill(-1);


    // Iterate through the string
    for (let end = 0; end < n; end++) {

        const currentChar = s.charCodeAt(end);

        // console.log("currentChar", currentChar)
        // console.log(charIndexMap[currentChar] + 1)

        // Update the starting index of the substring based on the character occurrence
        start = Math.max(start, charIndexMap[currentChar] + 1);

        // console.log("start", start)
        // console.log("end", end)

        // Update the maximum length of the substring
        if (end - start + 1 > maxLength) {

            maxLength = end - start + 1;

            // console.log("maxLength", maxLength)
            // console.log("innerloop called")

            longestSubstring = s.substring(start, end + 1);
        }

        // console.log("longestSubstring", longestSubstring)

        // Store the index of the current character
        charIndexMap[currentChar] = end;


        // tempArr.map((elem) => {
        //     console.log("charIndexMapFirst", charIndexMap[elem])
        // })


        // tempArr.map((elem) => {
        //     console.log("charIndexMapSecond", charIndexMap[elem])
        // })

    }

    return longestSubstring;
}


function longestSubstrDistinctChars(s) {
    //code here
    let max = -Infinity
    let i = 0;
    let j = 0;
    let map = {}
    for (let j = 0; j < s.length; j++) {

        map[s[j]] = map[s[j]] + 1 || 1

        // console.log(map)

        while (map[s[j]] > 1) {
            // console.log(map)
            // console.log("i", i)
            // console.log(map[s[i]])

            map[s[i]]--
            i++
        }

        max = Math.max(max, j - i + 1)
    }
    return max
}


function longestSubstrDistinctCharsII(str) {

    // if string length is 0
    if (str.length === 0)
        return 0;
 
    // if string length 1
    if (str.length === 1)
        return 1;
 
    // if string length is more than 2
    let maxLength = 0;
    let visited = new Array(256).fill(false);
 
    // left and right pointer of sliding window
    let left = 0, right = 0;
    while (right < str.length) {
 
        // if character is visited
        if (visited[str.charCodeAt(right)]) {
 
            // The left pointer moves to the right while
            // marking visited characters as false until the
            // repeating character is no longer part of the
            // current window.
            
            while (visited[str.charCodeAt(right)]) {
                visited[str.charCodeAt(left)] = false;
                left++;
            }
        }
 
        visited[str.charCodeAt(right)] = true;

        // console.log("visited", visited)
 
        // The length of the current window (right - left + 1)
        // is calculated and the answer is updated accordingly.
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
 
    return maxLength;
}


function longestSubstrDistinctCharsIII() { // O(n^2)
    //code here
    
    let count = 0;
    let maxCount = 0;
    
    for(let i=0; i<s.length; i++){
        let charSet = new Set();
        count = 0;
        
        for(let j=i; j<s.length; j++){
            if(!charSet.has(s.charAt(j))){
                charSet.add(s.charAt(j));
                count++;
            }
            else{
                break;
            }
        }
        if(count >  maxCount){
            maxCount = count;
        }

        console.log(charSet)
    }
    

    return maxCount;
}



// Example usage:
const s = "abcabcbb"
// const s = "pwwkew"

// console.log(lengthOfLongestSubstring(s)); // Output: 3 (for "abc")

console.log(longestSubstrDistinctCharsII(s)); // Output: "abc"




