/*
    Sliding window sum --> ()

    Exapmple:
    Input : [1, 2, 3, 4, 5, 6] 
    K : 3
    Output: [6, 9, 12, 15]


*/



function slindingWindowSum(arr, k) {

    let n = arr.length
    let sum = 0, res = []
    
    // for first window
    for(let i=0; i<k; i++) {
        sum += arr[i]
    }
    
    res.push(sum)

    let l = 0, r = k
 
    // for remaining window
    for(let i=1; i<n-k+1; i++) {

        sum -= arr[l]
        l++

        sum += arr[r]
        r++

        res.push(sum)

    }
    
    return res

}


let arr = [1, 2, 3, 4, 5, 6] 
let k = 3

const res = slindingWindowSum(arr, k)
console.log(res)

