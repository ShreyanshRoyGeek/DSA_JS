
function reverseAnArray(l, r, arr) {

    // base case
    if(l>r) return

    // do the small task
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp

    // ask recursion to handle the remaining part
    reverseAnArray(l+1, r-1, arr)

    return 
}


let arr = [1,2,3,4]
let l = 0, r = arr.length - 1

reverseAnArray(l, r, arr)

console.log('resArr', arr)

