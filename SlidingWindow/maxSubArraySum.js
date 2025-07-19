/*

*/


function maxSubArraySum(arr) { // 0(n^2)

    let maxSum = 0
    for(let i=0; i<arr.length; i++) {
        let sum = 0
        for(let j=i; j<arr.length; j++) {
            sum += arr[j]
            maxSum = Math.max(sum, maxSum)
        }
    }
    return maxSum

}


function maxSubArraySumWithSizeKWithSumLessThanM(arr, k, m) { // 0(n*k)

    let maxSum = 0
    for(let i=0; i<arr.length - k; i++) {
        let sum = 0
        for(let j=i; j<i+k; j++) {
            // if(arr[j]) {
                sum += arr[j]
                if(sum < m) {
                    maxSum = Math.max(sum, maxSum)
                }
            // }
        }
    }
    return maxSum
}


const arr = [3,4,5,6,7,8]
// const res = maxSubArraySum(arr)
// const res = maxSubArraySumWithSizeK(arr, 3, 20)
const res = maxSubArraySumWithSizeKWithSumLessThanM(arr, 3, 20)
console.log(res)

