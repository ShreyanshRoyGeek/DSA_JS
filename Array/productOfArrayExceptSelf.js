/*
    Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

    Example:
    Input:  [1,2,3,4]       
    Output: [24,12,8,6]

    Note: Please solve it without division and in O(n).

    Follow up: Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)   
*/


function getPrefixSuffixProduct(nums) {

    let n = nums.length
    let prefProd = new Array(n).fill(1)
    let suffixProd = new Array(n).fill(1)

    // prefix products -> product before elem
    for(let i=1; i<n; i++) {
        prefProd[i] = nums[i-1] * prefProd[i-1]
    }

    // suffix products -> product after elem
    for(let i=n-2; i>=0; i--) {
        suffixProd[i] = nums[i+1] * suffixProd[i+1]
    }

    let res = new Array(n).fill(1)

    for(let i=0; i<n; i++) {
        res[i] = prefProd[i] * suffixProd[i]
    }

    return {prefProd, suffixProd, result: res}

}


function productExceptSelf(nums) { // O(n) time and O(1) space

    let n = nums.length
    let result = new Array(n).fill(1)

    // Calculate prefix products
    for(let i=1; i<n; i++) {
        result[i] = nums[i-1] * result[i-1]
    }

    // Calculate suffix products and multiply with prefix products
    let suffixProd = 1
    for(let i=n-1; i>=0; i--) {
        result[i] *= suffixProd
        suffixProd *= nums[i]
    }

    return result
}


// let nums = [1,2,3,4,5]
let nums = [1,2,3,4]

const res = getPrefixSuffixProduct(nums)
console.log(res);
