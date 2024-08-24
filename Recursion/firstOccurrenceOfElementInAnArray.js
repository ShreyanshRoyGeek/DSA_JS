
function firstOccurenceOfElementInAnArray(arr, key, i) {

    if(i == arr.length -1) {
        if(arr[i] == key){
            return i
        }
        else {
            return -1
        }
    }

    if(arr[i] == key){
        return i
    }
    
    return firstOccurenceOfElementInAnArray(arr, key, i+1)

}

// console.log(firstOccurenceOfElementInAnArray([1,2,3,4,5], 4, 0))
// console.log(firstOccurenceOfElementInAnArray([1], 4, 0))


function lastOccurenceOfElementInAnArray(arr, key, i) {

    if(i == 0) {
        if(arr[i] == key){
            return i
        }
        else {
            return -1
        }
    }

    if(arr[i] == key) {
        return i
    }

    return lastOccurenceOfElementInAnArray(arr, key, i-1)

}


console.log(lastOccurenceOfElementInAnArray([1,2,3,4,5,5], 5, 5))

