/*
    46. Permutations --> (Medium)

    Given an array nums of distinct integers, return all the possible permutations.
    You can return the answer in any order.


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




function permutation(nums) {

    let result = []
    let indx = 0

    solve(nums, indx)

    function solve(nums, indx) {

        // base case
        if(indx >= nums.length) {
            result.push([...nums])
            return
        }

        for(let j=indx; j<nums.length; j++) {

            swap(indx, j)

            solve(nums, indx+1)

            // backtrack
            swap(indx, j)
        }

    }

    function swap(i, j) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    return res

}


let nums = [1, 2, 3]
console.log(permutation(nums))


