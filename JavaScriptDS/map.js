// Creating a new Map
const myMap = new Map();

// Adding key-value pairs
myMap.set("key1", "value1");
myMap.set("key2", "value2");

// Retrieving values
console.log(myMap.get("key1")); // Output: "value1"

// Checking for existence
console.log(myMap.has("key2")); // Output: true

// Size of the Map
console.log(myMap.size); // Output: 2

// Iterating over entries
myMap.forEach((value, key) => {
    console.log(`${key} -> ${value}`);
});

// Output:
// key1 -> value1
// key2 -> value2
