/*

    Sliding Window Minimum --> Array 

    Please refere sliding window maximum, for detailed explanation

    Example ->

    Input: arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]
    k= 3
    Output: [1, 1, 1, 1, 2, 2, 2]

    Input: arr[] = [1, 3, 2, 1, 7, 3], k = 3
    Output: [1, 1, 1, 1]


*/



function minOfSubarrays(arr, k) { // 0(n) time and 0(k) space

    let res = []
    let dq = []

    for(let i=0; i<k; i++) {

        while(dq.length > 0 && arr[i] <= arr[dq[dq.length -1]]) {
            dq.pop()
        }
        dq.push(i)
    }

    for(let i=k; i<arr.length; i++) {

        res.push(arr[dq[0]])

        while(dq.length > 0 && dq[0] <= i-k) {
            dq.shift()
        }

        while(dq.length > 0 && arr[i] <= arr[dq[dq.length -1]]) {
            dq.pop()
        }

        dq.push(i)
    }

    res.push(arr[dq[0]])

    return res

}


let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]
let k = 3

const res = minOfSubarrays(arr, k) 
console.log(res)

