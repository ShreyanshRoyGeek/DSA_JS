/*
    Max Len of subarray with sum less than k
*/





function maxLenSubArray(arr, k) {

    let maxLen = 0

    for(let i=0; i<arr.length-1; i++) {

        sum = arr[i]

        for(let j=i+1; j<arr.length; j++) {

            sum += arr[j]

            if(sum < k) {

                maxLen = Math.max(maxLen, j-i+1)
            }
            else {
                break
            }
        }

    }

    return maxLen

}



function maxLenSubArrayUsingSlidingWindow(arr, k) {

    let l = 0, r = 0, n = arr.length
    let sum = 0, maxLen = 0

    while(r < n) {

        sum += arr[r]

        if(sum >= k) {
            sum -= arr[l]
            l++
        }

        maxLen = Math.max(r-l+1, maxLen)
        r++

    }

    return maxLen

}

let arr = [2, 5, 1, 7, 10]
const res = maxLenSubArrayUsingSlidingWindow(arr, 14)

console.log(res)
