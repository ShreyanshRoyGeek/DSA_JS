
function binarySearch(arr, key) {

    let start = 0, end = arr.length - 1

    while(start <= end){

        let mid = Math.floor( (start + end) / 2 )

        if(arr[mid] == key){
            return mid
        }

        if(arr[mid] < key){
            start = mid + 1
        }

        else {
            end = mid - 1
        }
    }

    return -1
}

const index = binarySearch([1, 4, 6, 7, 8], 4) // binary search works for only sorted arry

if(index == -1){
    console.log("The element is not present")
}
else {
    console.log("The element is present at index ", index)
}

