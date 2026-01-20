/*

    Given an integer array nums of unique elements, return all possible subsets (the power set).
    The solution set must not contain duplicate subsets. Return the solution in any order.

    Example 1:
    Input: nums = [1,2,3]
    Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

    Example 2:
    Input: nums = [0]
    Output: [[],[0]]


    Constraints:
    1 <= nums.length <= 10
    -10 <= nums[i] <= 10
    All the numbers of nums are unique.


*/


function subset(nums) {

    let res = []
    let subset = []

    findSubset(nums, 0)

    function findSubset(nums, i) {

        // base case
        if(i == nums.length) {
            res.push([...subset])
            return 
        }
        
        subset.push(nums[i])
        findSubset(nums, i+1)

        subset.pop() 
        findSubset(nums, i+1)

    }

    return res

}


let arr = [1,2,3]
const res = subset(arr)
console.log(res)


