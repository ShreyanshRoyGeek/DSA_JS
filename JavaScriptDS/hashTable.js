class HashTable {
    constructor(size) {
        this.size = size; // Size of the hash table (default is 10)
        this.table = new Array(size); // Initialize an array to store the hash table
    }

    // Hashing function to map keys to indices
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Function to insert a key-value pair into the hash table
    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = []; // Initialize a bucket if it doesn't exist
        }
        this.table[index].push({ key, value });
    }

    // Function to retrieve the value associated with a key
    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (const item of this.table[index]) {
                if (item.key === key) {
                    return item.value; // Return the value if key is found
                }
            }
        }
        return undefined; // Return undefined if key is not found
    }

    // Function to remove a key-value pair from the hash table
    remove(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            this.table[index] = this.table[index].filter(item => item.key !== key);
        }
    }
}

// Example usage:
const hashTable = new HashTable(1);

hashTable.insert("name", "John");
hashTable.insert("age", 30);

console.log(hashTable.get("name")); // Output: "John"
console.log(hashTable.get("age")); // Output: 30

console.log("HashTable", hashTable.table)

hashTable.remove("age");

console.log(hashTable.get("age")); // Output: undefined
