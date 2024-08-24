
function findMinimumIndexOfOneString(str, patt) {

    const charSet = new Set(patt); // Create a set of characters from patt
    let minIndex = Infinity; // Initialize the minimum index as positive infinity

    // Iterate through the characters of str
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // Check if the current character exists in the set
        if (charSet.has(char)) {
            minIndex = Math.min(minIndex, i); // Update the minimum index
        }
    }

    // If minIndex is still positive infinity, no character in str is present in patt
    // Otherwise, return the minimum index found
    return minIndex === Infinity ? -1 : minIndex;
}


function findMinimumIndexOfBothString(str, patt) {
    
    const charIndexMap = {}; // Map to store the index of each character in patt
    let minIndex = Infinity; // Initialize the minimum index as positive infinity

    // Populate charIndexMap with the index of each character in patt
    for (let i = 0; i < patt.length; i++) {
        const char = patt[i];
        if (!(char in charIndexMap)) {
            charIndexMap[char] = i;
        }
    }

    // Iterate through the characters of str and find the minimum index
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char in charIndexMap && charIndexMap[char] < minIndex) {
            minIndex = charIndexMap[char];
        }
    }

    // If minIndex is still positive infinity, no character in str is present in patt
    // Otherwise, return the minimum index found
    return minIndex === Infinity ? -1 : minIndex;
}

// Example usage:
const str = "hello";
const patt = "world";
console.log("Minimum index:", findMinimumIndexOfBothString(str, patt)); 





