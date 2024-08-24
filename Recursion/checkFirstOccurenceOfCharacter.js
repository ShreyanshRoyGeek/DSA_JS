
function giveFirstOccurenceOfCharacter(arr, key, i) {
    
    if(arr[i] == key) {
        return  i
    }

    if(i >= arr.length) {
        return -1
    }

    return giveFirstOccurenceOfCharacter(arr, key, i+1)

}



let count = 1
function giveLastOccurenceOfCharacter(arr, key, i) {

    
    if(arr[i] == key) {
        return  i
    }
    
    if(i <= 0) {
        return -1
    }
    
    count ++
    return giveLastOccurenceOfCharacter(arr, key, i-1)

}



let driverArr = [3, 5, 6, 8, 5, 7, 9]
console.log(giveLastOccurenceOfCharacter(driverArr, 5, driverArr.length-1))
console.log(count)
