// Creating a "HashMap" using a JavaScript object
const myHashMap = {};

// Adding key-value pairs
myHashMap["key1"] = "value1";
myHashMap["key2"] = "value2";

// Retrieving values
console.log(myHashMap["key1"]); // Output: "value1"

// Checking for existence
console.log("key2" in myHashMap); // Output: true

// Deleting a key-value pair
delete myHashMap["key1"];

// Iterating over keys
for (let key in myHashMap) {
    console.log(`${key} -> ${myHashMap[key]}`);
}
