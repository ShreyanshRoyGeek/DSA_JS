/*
    Equilibrium Point  ---> Array 

    Given an array of integers arr[], the task is to find the first equilibrium point in the array.

    The equilibrium point in an array is an index (0-based indexing) such that the sum of all elements before that index is the same as the sum of elements after it. 
    Return -1 if no such point exists. 


    Input: arr[] = [1, 2, 0, 3]
    Output: 2 
    Explanation: The sum of left of index 2 is 1 + 2 = 3 and sum on right of index 2 is 3.


    Input: arr[] = [1, 1, 1, 1]
    Output: -1
    Explanation: There is no equilibrium index in the array.


    Input: arr[] = [-7, 1, 5, 2, -4, 3, 0]
    Output: 3
    Explanation: The sum of left of index 3 is -7 + 1 + 5 = -1 and sum on right of index 3 is -4 + 3 + 0 = -1.

*/


const getEqulibriumPoint = (arr) => {

    let sumArr = []
    let sumEle = 0

    // If array contain one elem only
    if(arr.length == 1) {
        return 0
    }

    // If array contain one elem only, no equlibrium point
    if(arr.length == 2) {
        return -1
    }

    for(let i=0; i<arr.length; i++) {
        sumEle += arr[i]
        sumArr[i] = sumEle
    }

    // console.log(sumArr)

    for(let i=0; i<arr.length; i++) {
        const leftSum = sumArr[i] - arr[i]
        const rightSum = sumEle - sumArr[i]

        if(leftSum === rightSum) {
            return i
        }
    }

    return -1


}



let arr = [1, 2, 0, 3]
arr = [-7, 1, 5, 2, -4, 3, 0]
arr = [1, 1, 1, 1]

const res = getEqulibriumPoint(arr)
console.log('res', res)
