/*

    4 Sum - All Quadruples --> (Medium)

    Given an array arr[] of integers and another integer target. 
    You have to find all unique quadruples from the given array whose sum is equal to the given target.

    Note: All the quadruples should be internally sorted, i.e for any quadruple [q1, q2, q3, q4] it should be : q1 ≤ q2 ≤ q3 ≤ q4.

    Examples :
    Input: arr[] = [0, 0, 2, 1, 1], target = 3
    Output: [[0, 0, 1, 2]]
    Explanation: Sum of 0, 0, 1, 2 is equal to 3.

    Input: arr[] = [10, 2, 3, 4, 5, 7, 8], target = 23
    Output: [[2, 3, 8, 10], [2, 4, 7, 10], [3, 5, 7, 8]] 
    Explanation: Sum of [2, 3, 8, 10] is 23, sum of [2, 4, 7, 10] is 23 and sum of [3, 5, 7, 8] is also 23.

    Input: arr[] = [0, 0, 2, 1, 1], target = 2
    Output: [[0, 0, 1, 1]]
    Explanation: Sum of [0, 0, 1, 1] is equal to 2.


*/


function getAllQuadruplesSum(arr, target) { // O(n^5) time & O(n) space

    let n = arr.length, res = []

    for(let i=0; i<n; i++) {

        for(let j=i+1; j<n; j++) {

            for(let k=j+1; k<n; k++) {

                for(let l=k+1; l<n; l++) {

                    if((arr[i] + arr[j] + arr[k] + arr[l]) == target) {
                        let curr = [arr[i], arr[j], arr[k], arr[l]]
                        curr = curr.sort((a,b) => a-b)

                        // add distinct only
                        if(!res.some(x => x.join() === curr.join())) {
                            res.push(curr)
                        }

                    }
                }

            }
        }
    }

    return res

}


function getAllQuadruplesSumI(arr, target) { // O(n^3) time & O(n) space

    let n = arr.length
    let resArr = new Set()

    for(let i=0; i<n; i++) {

        for(let j=i+1; j<n; j++) {

            let set = new Set() 

            for(let k=j+1; k<n; k++) {

                let sum = arr[i] + arr[j] + arr[k]
                let diff = target - sum

                if(set.has(diff)) {
                    let curr = [arr[i], arr[j], arr[k], diff].sort((a,b) => a-b)
                    resArr.add(curr.toString())
                }

                set.add(arr[k])
            }
        }
    }

    return resArr

}


let arr = [0, 0, 2, 1, 1]
arr = [10, 2, 3, 4, 5, 7, 8]
let target = 3
target = 23

const res = getAllQuadruplesSumI(arr, target)
console.log(res)

