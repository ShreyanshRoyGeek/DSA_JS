/*

    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

    Notice that the solution set must not contain duplicate triplets.
    
    
    Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.

    Example 2:
    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

    Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.
 

    Constraints:
    3 <= nums.length <= 3000
    -105 <= nums[i] <= 105

*/


function tripletWithZeroSum(nums) {

    nums = nums.sort((a, b) => a - b)

    let n = nums.length
    let res = []

    for (let i = 0; i < n; i++) {

        if(i>0 && nums[i] == nums[i-1]) continue

        let l = i + 1, r = n - 1

        while (l < r) {

            const sum = nums[i] + nums[l] + nums[r]

            if (sum == 0) {

                if(res.length > 0) {
                    const term = [nums[i], nums[l], nums[r]].join('')
                    let duplicateFound = false
                    for(ele of res) {
                        ele = ele.join('')
                        if(ele === term) {
                            duplicateFound = true
                        }
                    }

                    if(!duplicateFound) {
                        res.push([nums[i], nums[l], nums[r]])
                    }

                }
                else {
                    res.push([nums[i], nums[l], nums[r]])
                }
                
                /*if(!res.includes([nums[i], nums[l], nums[r]])) {
                    res.push([nums[i], nums[l], nums[r]])
                }*/

                l++
                r--

                while(l<r && nums[l] == nums[l-1]) {
                    l++ 
                } 
                
            }
            else if (sum < 0) {
                l++
            }
            else {
                r--
            }

        }

    }

    return res

}


// let arr = [-1,0,1,2,-1,-4]
let arr = [-100,-70,-60,110,120,130,160]
// let arr = [0 ,1, 1]
// let arr = [0,0,0]
const res = tripletWithZeroSum(arr)
console.log(res)


