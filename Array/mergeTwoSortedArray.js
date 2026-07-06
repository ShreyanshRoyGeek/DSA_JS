/*
    Merge Two Sorted Array --> 

*/


function mergeTwoSortedArrays(nums1, m, nums2, n) {

    let i = 0, j = 0
    let resArr = []

    while(i<m && j<n) {

        if(nums1[i] < nums2[j]) {
            resArr.push(nums1[i])
            i++
        }
        else {
            resArr.push(nums2[j])
            j++
        }

    }

    while(i<m){
        resArr.push(nums1[i])
        i++
    }

    while(j<n){
        resArr.push(nums2[j])
        j++
    }

    return resArr

}   


let arr1 = [0, 0, 0, 1, 2, 3]
let arr2 = [2, 5, 6]


console.log(mergeTwoSortedArrays(arr1, arr1.length, arr2, arr2.length))



