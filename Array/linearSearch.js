
function linearSearch(arr, key) {

    for(let i=0; i<arr.length; i++) {

        if(arr[i] == key) {
            return i
        }
    }
    return -1
}

const index = linearSearch([1, 2, 3, 4, 5], 4)

// const index = linearSearch(["Apple", "Tomato", "Grapes", "Orange", "Papaya"], "Banana")

if(index == -1){
    console.log("Key not found")
}
else {
    console.log("key found at index", index)
}
