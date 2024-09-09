/*
    Recusrsion & Backtracking --> Array (Medium)

    Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
    
    Example 1:
    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

    Example 2:
    Input: nums = [0,1]
    Output: [[0,1],[1,0]]

    Example 3:
    Input: nums = [1]
    Output: [[1]]

    Constraints:
    1 <= nums.length <= 6
    -10 <= nums[i] <= 10
    All the integers of nums are unique.

*/


function swap(ele1, ele2, nums) {

    let temp = nums[ele1]
    nums[ele1] = nums[ele2]
    nums[ele2] = temp
}


function solve(nums, ans, index) {

    //base case
    if(index >= nums.length) {
        ans.push([...nums])
        return
    }

    for(let j=index; j<nums.length; j++) {

        swap(index, j, nums)
        solve(nums, ans, index+1)

        //backtracking
        swap(index, j, nums)
    }

}


const permuatation = function(nums) {

    let ans = []
    let index = 0
    solve(nums, ans, index)

    return ans

}


const nums = [1,2,3]
const res = permuatation(nums)
console.log('res', res)

