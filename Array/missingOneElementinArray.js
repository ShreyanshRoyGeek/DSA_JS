
function findMissingElement(arr1, arr2) { // Not optimized solution like arr.includes()

    for (let i = 0; i < arr1.length; i++) {

        if (arr2.indexOf(arr1[i]) === -1) {
            return arr1[i];
        }
    }

    return null; // If no missing element found
}


function findMissingElementII(arr1, arr2) { // O(n) approach

    // Function to calculate sum of elements in an array
    const sum = arr => arr.reduce((acc, num) => acc + num, 0);

    // Calculate the sum of elements in both arrays
    const sum1 = sum(arr1);
    const sum2 = sum(arr2);

    // The missing element will be the difference between the two sums
    return sum1 - sum2;
}



function findMissingElementIII(arr1, arr2) {  // O(n)
    const map = {}; // Hash table to store elements of arr2
    
    // Populate the hash table with elements from arr2
    for (let num of arr2) {
        map[num] = true;
    }

    console.log("hash table", map)
    
    // Check for missing element in arr1
    for (let num of arr1) {
        if (!map[num]) {
            return num;
        }
    }
    
    return null; // If no missing element found
}


function findMissingElementIV(arr1, arr2) {  // O(n)
    let missingElement = 0;

    // XOR all elements from both arrays
    for (let num of arr1) {
        missingElement ^= num;
    }
    for (let num of arr2) {
        missingElement ^= num;
    }

    return missingElement;
}


function findMissingElementIV(arr1, arr2) { // O(n) 
    const set = new Set(arr2);

    
    // Iterate through arr1 and check if each element exists in the set
    for (let num of arr1) {
        if (!set.has(num)) { // 0(1)
            return num;
        }
    }

    
    return null; // If no missing element found
}



// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 5];

const missingElement = findMissingElementIV(array1, array2);
console.log("The missing element is:", missingElement);

