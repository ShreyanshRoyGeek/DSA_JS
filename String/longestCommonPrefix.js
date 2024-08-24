
function longestCommonPrefixII(strs) {

    // Check if the input array is empty or null
    if (!strs || strs.length === 0) {
        return "";
    }
    
    let prefix = ""; // Initialize an empty string to store the common prefix
    
    // Iterate through characters of the first string in the array
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]; // Get the character at index i of the first string
        
        // Iterate through the rest of the strings in the array
        for (let j = 1; j < strs.length; j++) {
            // Check if we've reached the end of the current string or if the character at index i doesn't match
            if (i >= strs[j].length || strs[j][i] !== char) {
                // If we encounter a mismatch or reach the end of a string, return the current prefix
                return prefix;
            }
        }
        
        // If all strings have the same character at index i, add that character to the prefix
        prefix += char;
    }
    
    // Return the longest common prefix found
    return prefix;
}

// Example usage:
// const strings1 = ["flower", "flow", "flight"];
// console.log(longestCommonPrefixII(strings1)); // Output: "fl"


function longestCommonPrefixIII(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }
    
    // Helper function to find common prefix between two strings
    function findCommonPrefix(str1, str2) {
        let prefix = "";
        let minLength = Math.min(str1.length, str2.length);
        for (let i = 0; i < minLength; i++) {
            if (str1[i] !== str2[i]) {
                break;
            }
            prefix += str1[i];
        }
        return prefix;
    }
    
    let prefix = strs[0]; // Initialize prefix with the first string
    
    // Iterate through the strings starting from the second one
    for (let i = 1; i < strs.length; i++) {
        // Find the common prefix between the current string and the current prefix
        prefix = findCommonPrefix(prefix, strs[i]);
        // If the common prefix becomes empty, no need to check further
        if (prefix === "") {
            break;
        }
    }
    
    return prefix;
}

// Example usage:
const strings2 = ["flower", "flow", "flight"];
console.log(longestCommonPrefixIII(strings2)); // Output: "fl"


let driverStr1 = 'Heilo'

let driverStr2 = "Helpin"

let driverStr3 = "Helpi"

// longestCommonPrefix(driverStr1, driverStr2, driverStr3)
