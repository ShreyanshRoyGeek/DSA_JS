/*
    Find all pairs with a given sum  --> Array (Easy)

    Given two unsorted arrays a[]  and b[], the task is to find all pairs whose sum equals x from both arrays.

    Note: All pairs should be returned in increasing order of u. 
    For eg. for two pairs (u1,v1) and (u2,v2), if u1 < u2 then (u1,v1) should be returned first else second. 
    
    
    Input: target = 9, a[] = [1, 2, 4, 5, 7], b[] = [5, 6, 3, 4, 8]
    Output: 
    1 8
    4 5 
    5 4
    Explanation: (1, 8), (4, 5), (5, 4) are the pairs which sum to 9.


    Input: target = 8, a[] = [-1, -2, 4, -6, 5, 7], b[] = [6, 3, 4, 0]
    Output:
    4 4 
    5 3


    Input: target = 9, a[] = [1, 2, 4, 5, 7, 4], b[] = [5, 6, 3, 4, 8, 4]
    Output:
    1 8
    4 5
    4 5
    5 4
    5 4
    Explanation: (1, 8), (4, 5), (4, 5), (5, 4) and (5, 4) are the pairs which sum to 9.

*/


function findAllPairsWithGivenSum(arr1, arr2, target) {

    let resArr = []
    let table = {}

    // arr1 = arr1.sort((a, b) => a-b)
    // arr2 = arr2.sort((a, b) => a-b)

    for(let i=0; i<arr2.length; i++) {
        table[arr2[i]] = ( table[arr2[i]] || 0 ) + 1
    }

    for(let i=0; i<arr1.length; i++) {

        const diff = target - arr1[i] 

        if(table[diff] !== undefined) {
            const count = table[diff]
            for(let j=0; j<count; j++) {
                resArr.push([arr1[i], diff])
            }
        }

        // sort the result by first element of the pair
        resArr.sort((a,b) => a[0] - b[0])
    }

    return resArr
}


let a = [1, 2, 4, 5, 7]
a = [1, 2, 4, 5, 7, 4]
let b = [5, 6, 3, 4, 8]
b = [5, 6, 3, 4, 8, 4]
let target = 9

const res = findAllPairsWithGivenSum(a, b, target)
console.log('res', res)

