function getAllCombinations(arr) {
    let result = [];

    function helper(currentCombo, start) {
        result.push([...currentCombo]); // Store the current combination

        for (let i = start; i < arr.length; i++) {
            currentCombo.push(arr[i]); // Add the current element to the combination
            helper(currentCombo, i + 1); // Recurse with the next elements
            currentCombo.pop(); // Backtrack to remove the last element
        }
    }

    helper([], 0);
    return result;
}


function getAllCombinationsII(arr) {
    let result = [];
    let totalCombinations = Math.pow(2, arr.length); // 2^n combinations

    for (let i = 0; i < totalCombinations; i++) {
        let combo = [];

        for (let j = 0; j < arr.length; j++) {
            if (i & (1 << j)) {
                combo.push(arr[j]); // Include arr[j] in the combination
            }
        }

        result.push(combo);
    }

    return result;
}



// Example usage
const array = [1, 2, 3];
console.log(getAllCombinationsII(array));

// Output:
// [
//   [], [1], [2], [1, 2],
//   [3], [1, 3], [2, 3], [1, 2, 3]
// ]


// Example usage
// const array = [1, 2, 3];
// console.log(getAllCombinations(array));

// Output:
// [
//   [],          // Empty combination
//   [1],         // Single element combinations
//   [1, 2],
//   [1, 2, 3],   // All element combinations
//   [1, 3],
//   [2],
//   [2, 3],
//   [3]          // Last element as a single combination
// ]
