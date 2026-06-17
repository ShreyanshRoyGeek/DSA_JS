/*
    33. Search in Rotated Sorted Array --> (Medium)

    There is an integer array nums sorted in ascending order (with distinct values).    

    Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
    Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4

    Example 2:
    Input: nums = [4,5,6,7,0,1,2], target = 3   
    Output: -1

*/


function searchInSortedMatrix(nums, target) {
    let st = 0, end = nums.length - 1

    while(st <= end) {

        let mid = Math.floor((st + end) / 2)

        if(nums[mid] == target) {
            return mid
        }

        // left sorted 
        if(nums[st] <= nums[mid]) {
            if(nums[st] <= target && nums[mid] > target) {
                end = mid - 1
            }
            else {
                st = mid + 1
            }
        }

        // right sorted
        else {
            if(nums[mid] < target && nums[end] >= target) {
                st = mid + 1
            }
            else {
                end = mid - 1
            }
        }
    }

    return -1
}


let nums = [4,5,6,7,0,1,2]
let target = 2

let res = searchInSortedMatrix(nums, target)
console.log(res)

