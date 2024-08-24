function customIndexOf(s, x) {
    
    // Iterate through s using a sliding window of length x
    for (let i = 0; i <= s.length - x.length; i++) {
        // Check if the substring starting from the current index matches x
        let match = true;
        for (let j = 0; j < x.length; j++) {
            if (s[i + j] !== x[j]) {
                match = false;
                break;
            }
        }
        // If a match is found, return the index
        if (match) {
            return i;
        }
    }
    // If no match is found, return -1
    return -1;
}


// Example usage:
const s = "hello world";
const x = "world";
console.log("First occurrence:", customIndexOf(s, x)); // Output: 6 (0-based indexing)
