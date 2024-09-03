/*

Subset --> Recursion (Medium)

Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.


Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]


Example 2:
Input: nums = [0]
Output: [[],[0]]

*/

function solve(nums, index, output, resArr) {

    // console.log('index', index)

    //base case
    if (index == nums.length) {
        // console.log(output)
        resArr.push([...output])
        return
    }

    //exclude
    solve(nums, index + 1, output, resArr)


    //include
    output.push(nums[index])
    solve(nums, index + 1, output, resArr)


    //backtracking
    output.pop()

}


let nums = [1, 2, 3]

let resArr = []
let output = []
let index = 0

solve(nums, index, output, resArr)
console.log('resArr', resArr)



function findSubsets(arr, index = 0, currentSubset = [], resArr = []) {

    // Base case: if we've gone through all elements, print the current subset
    if (index === arr.length) {
        // console.log(currentSubset);
        resArr.push([...currentSubset])
        return;
    }

    // Recursive case 1: Exclude the current element and move to the next
    findSubsets(arr, index + 1, currentSubset, resArr);

    // Recursive case 2: Include the current element in the subset
    currentSubset.push(arr[index]);
    findSubsets(arr, index + 1, currentSubset, resArr);

    // Backtrack: remove the last element to explore other subsets
    currentSubset.pop();

    return resArr

}



function findSubsetGFG() {

    // code here

    let allSubset = []
    let currSubset = []
    let index = 0

    solve(a, index, currSubset, allSubset)


    // Sort the subsets (if needed)
    allSubset.sort((a, b) => {

        // Custom sorting function to sort based on array elements
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] !== b[i]) {
                return a[i] - b[i];
            }
        }
        return a.length - b.length;
    });

    return allSubset


    function solve(a, index, currSubset, allSubset) {

        //base case
        if (index == a.length) {
            allSubset.push([...currSubset])
            return
        }

        //exclude
        solve(a, index + 1, currSubset, allSubset)


        //include
        currSubset.push(a[index])
        solve(a, index + 1, currSubset, allSubset)


        //backtrack
        currSubset.pop()
    }

}


// Example usage
const arr = [1, 2, 3];
const res = findSubsets(arr, index=0, currentSubset = [], resArr = []);
console.log('res', res)


