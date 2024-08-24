// Example 1: Using XOR operator to toggle a boolean value
let isLightOn = true;
isLightOn = isLightOn ^ true; // Toggles the value
console.log("Is light on?", isLightOn); // Output: false


// Example 2: Using XOR operator to swap two variables without using a temporary variable
let a = 5, b = 10;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("a:", a, "b:", b); // Output: a: 10 b: 5


// Example 3: Using XOR operator to find the odd one out in an array
function findOddOneOut(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num;
    }
    return result;
}


const numbers = [1, 2, 3, 2, 1, 4, 4];
console.log("Odd one out:", findOddOneOut(numbers)); // Output: 3
