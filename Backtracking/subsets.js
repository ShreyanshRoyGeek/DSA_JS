/*
    78. Subsets  --> (Medium)

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

    let subset = []
    let result = []

    function dfs(indx) {

        // base case
        if(indx == nums.length) {
            result.push([...subset])
            return
        }

        // not take 
        dfs(indx + 1)

        // take 
        subset.push(nums[indx])
        dfs(indx+1)

        // backtrack
        subset.pop()
    }

    dfs(0)
    return result
}


function subsetI(nums) {

    let subset = []
    let result = []

    function dfs(indx) {
        // base case
        if(indx == nums.length) {
            result.push([...subset])
            return
        }

        // take 
        subset.push(nums[indx])
        dfs(indx+1)

        // backtrack
        subset.pop()

        // not take 
        dfs(indx+1)
    }

    dfs(0)
    return result
}


let nums = [1,2,3]
console.log(subset(nums))

