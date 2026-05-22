/*
    128 - Longest Consecutive Sequence (Medium)

    Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

    You must write an algorithm that runs in O(n) time. 

    Example 1:
    Input: nums = [100,4,200,1,3,2] 
    Output: 4

    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.  


    Example 2:
    Input: nums = [0,3,7,2,5,8,4,6,0,1] 
    Output: 9

    Explanation: The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Therefore its length is 9.   

    Constraints:
    0 <= nums.length <= 10^5
    -10^9 <= nums[i] <= 10^9    

*/


function longestConsecutiveSeq(nums) { // O(n) time and O(n) space

    let table = {}

    for(let i=0; i<nums.length; i++) {
        table[nums[i]] =  ( table[nums[i]] | 0  )  + 1
    }   

    let longestSeq = 0
    for(let num in table) {
        if( !table[Number(num) - 1] ) {
            let currentNum = Number(num)
            let currentSeq = 1      
            while(table[currentNum + 1]) {
                currentNum++
                currentSeq++
            }
            longestSeq = Math.max(longestSeq, currentSeq)
        }           
    }

    return longestSeq
}


function longestConsecutiveSeqOptimal(nums) {  // O(n) time and O(n) space 

    let table = new Set(nums)
    let longestSeq = 0      

    for(let num of table) {

        if( !table.has(num - 1) ) {
            let currentNum = num
            let currentSeq = 1      
            while(table.has(currentNum + 1)) {
                currentNum++
                currentSeq++
            }   
            longestSeq = Math.max(longestSeq, currentSeq)
        }
    }   

    return longestSeq

}


function longestConsecutiveSeqOptimaN12(nums) {  // O(n) time and O(n) space

    let table = new Set(nums)
    let longestSeq = 0  

    for(let num of table) {

        if( !table.has(num - 1) ) {         
            let currentNum = num
            let currentSeq = 1
            while(table.has(currentNum + 1)) {
                currentNum++
                currentSeq++
            }   
            longestSeq = Math.max(longestSeq, currentSeq)
        }
    }       

    return longestSeq
}


function longestConsecutiveSeqOptimal3(nums) {  // O(n) time and O(n) space

    const numSet = new Set(nums);
    let longest = 0;

    for (let n of numSet) {
        if (!numSet.has(n - 1)) {
            let length = 1;

            while (numSet.has(n + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;  
}


const nums = [100, 4, 200, 1, 3, 2, 2]
console.log(longestConsecutiveSeq(nums))
