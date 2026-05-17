/*
    347. Top K Frequent Elements
    Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

    Example 1:
    Input: nums = [1,1,1,2,2,3], k = 2      
    Output: [1,2]

    Example 2:
    Input: nums = [1], k = 1
    Output: [1] 

    Constraints:
    1 <= nums.length <= 105

    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    it is guaranteed that the answer is unique.

    Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/



function topKFrequentElements(nums, k) { // O(n * log n)
    const freqMap = new Map()

    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }           

    const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1])

    // console.log(freqMap)
    // console.log(freqMap.entries())
    // console.log(sorted)

    // console.log(sorted.slice(0, k))
    // console.log(sorted.slice(0, k).map(entry => entry[0]))

    return sorted.slice(0, k).map(entry => entry[0])            

}


function topKFrequentElementsOld(nums, k) { // O(n * log n)
    const table  = {}   

    for (const num of nums) {
        table[num] = (table[num] || 0) + 1
    }       

    const sorted = Object.entries(table).sort((a, b) => b[1] - a[1])

    // console.log(Object.entries(table))

    return sorted.slice(0, k).map(entry => Number(entry[0]))
    // return sorted.slice(0, k).map(entry => parseInt(entry[0]))

}


let a = [1, 1, 1, 2, 2, 3]
let k = 2
// console.log(topKFrequentElements(a, k))
console.log(topKFrequentElementsOld(a, k))

