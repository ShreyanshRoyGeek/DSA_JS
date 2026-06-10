/*

    3 Sum - Triplet Sum in Array --> (Medium)

    Given an array arr[] and an integer target, determine if there exists a triplet in the array whose sum equals the given target.
    Return true if such a triplet exists, otherwise, return false.

    Examples:
    Input: arr[] = [1, 4, 45, 6, 10, 8], target = 13
    Output: true 
    Explanation: The triplet {1, 4, 8} sums up to 13.

    Input: arr[] = [1, 2, 4, 3, 6, 7], target = 10
    Output: true 
    Explanation: The triplets {1, 3, 6} and {1, 2, 7} both sum to 10. 

    Input: arr[] = [40, 20, 10, 3, 6, 7], target = 24
    Output: false 
    Explanation: No triplet in the array sums to 24.

    Constraints:
    3 ≤ arr.size() ≤ 103
    1 ≤ arr[i] ≤ 105

    Expected Complexities
    Time Complexity: O(n^2)
    Auxiliary Space: O(1)


*/



function hasTripletSum(arr, target) {

    let n = arr.length

    for (let i = 0; i < n - 2; i++) {

        for (let j = i + 1; j < n - 1; j++) {

            for (let k = i + 2; k < n; k++) {

                if (arr[i] + arr[j] + arr[k] == target) {
                    return true
                }

            }
        }
    }

    return false
}



function hasTripletSumI(arr, target) {

    let n = arr.length

    for (let i = 0; i < n - 1; i++) {

        const set = new Set()

        for (let j = i + 1; j < n; j++) {

            const requiredSum = target - (arr[i] + arr[j])
            if (set.has(requiredSum)) {
                return true
            }

            set.add(arr[j])
        }
    }

    return false
}


function hasTripletSumII(arr, target) {

    arr = arr.sort((a, b) => a - b)
    let n = arr.length

    for (let i = 0; i < n - 2; i++) {

        let l = i + 1, r = n - 1
        let requiredSum = target - arr[i]

        while (l < r) {

            if ((arr[l] + arr[r]) == requiredSum) return true

            if ((arr[l] + arr[r]) < requiredSum) {
                l++
            }
            else if ((arr[l] + arr[r]) > requiredSum) {
                r--
            }

        }
    }

    return false

}


function hasTripletSumIII(arr, target) {

    let res = []

    for (let i = 0; i < arr.length; i++) {

        let map = new Map()

        for (let j = i + 1; j < arr.length; j++) {

            const diff = target - (arr[i] + arr[j])

            if (map.has(diff)) {
                res.push([arr[i], diff, arr[j]])
                // return true
            }

            map.set(arr[j])
        }

    }

    return res
}


function hasTripletSumIV(arr, target) {

    arr = arr.sort((a, b) => a - b)

    let res = []

    for (let i = 0; i < arr.length - 2; i++) {

        let l = i + 1, r = arr.length - 1

        while (l < r) {

            const sum = arr[i] + arr[l] + arr[r]

            if (sum == target) {
                res.push([arr[i], arr[l], arr[r]])
                l++, r--
            }

            else if (sum > target) {
                r--
            }

            else if (sum < target) {
                l++
            }
        }

    }

    // for removing duplicates entries
    let temp = []
    // [[1,2,3], [1,2,3], [1,3,5]]

    res = res.filter((ele) => {

        console.log('ele', ele)

        const elemStr = [...ele].join(',')

        console.log('elemStr', elemStr)

        if(temp.indexOf(elemStr) == -1) {
            temp.push(elemStr)
            return true
        }
        else {
            return false
        }
        
    })

    return res
}


function hasTripletSumV(arr, target) {

    arr = arr.sort((a, b) => a - b);
    // console.log('arr', arr)

    let res = [];

    for (let i = 0; i < arr.length - 2; i++) {
        // Optimization: If the current smallest number is > 0, 
        // no three numbers can sum to 0.
        if (arr[i] > 0) break;

        // SKIP DUPLICATES for the first element
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let l = i + 1, r = arr.length - 1;

        while (l < r) {
            const sum = arr[i] + arr[l] + arr[r];

            if (sum === target) {
                res.push([arr[i], arr[l], arr[r]]);

                // SKIP DUPLICATES for the second and third elements
                while (l < r && arr[l] === arr[l + 1]) l++;
                while (l < r && arr[r] === arr[r - 1]) r--;

                l++;
                r--;
            } 
            else if (sum > target) {
                r--;
            } 
            else {
                l++;
            }
        }
    }

    return res;
}


// let arr = [1, 4, 45, 6, 10, 8, 20, 1, 1]
// let target = 22

let arr = [-1, 0, 1, 2, -1, -4]
let target = 0

const res = hasTripletSumV(arr, target)
console.log(res)

