/*

    Two Sum - Pair with Given Sum 

    Given an array arr[] of integers and another integer target. 
    Determine if there exist two distinct indices such that the sum of their elements is equal to the target.

    Examples:

    Input: arr[] = [0, -1, 2, -3, 1], target = -2
    Output: true
    Explanation: arr[3] + arr[4] = -3 + 1 = -2

    Input: arr[] = [1, -2, 1, 0, 5], target = 0
    Output: false
    Explanation: None of the pair makes a sum of 0

    Input: arr[] = [11], target = 11
    Output: false
    Explanation: No pair is possible as only one element is present in arr[]

    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(n)

*/


function twoSum(arr, target) { // O(n * log n)

    arr = arr.sort((a,b) => a-b)
    
    let l = 0, r = arr.length - 1
    let res = []

    while(l <r) {

        const sum = arr[l] + arr[r]

        if(sum == target) {
            res.push([arr[l], arr[r]])
            l++, r--
        }

        else if(sum < target) l++

        else  r--

    }

    return res

}



function twoSumI(arr, target) {

    const set = new Set()

    for(ele of arr) {

        const diff = target - ele

        if(set.has(diff)) {
            console.log([ele, diff]) // elements
            return true
        }

        set.add(ele)
    }

    return false

}



function twoSumII(arr, target) {

    let table = {}
    
    for(let i=0; i<arr.length; i++) {
        const diff =  target - arr[i]
        
        if(table[diff] !== undefined) {
            console.log([i, table[diff]]) // index
            return true
        }

        table[arr[i]] = i
    }
        
    return false

}



let arr = [0, -1, 2, -3, 1]
let target = -2

// let arr = [1, -2, 1, 0, 5]
// let target = 0

// let arr = [11]
// let target = 11

const res = twoSumI(arr, target)
console.log(res)




