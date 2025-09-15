/*

    Overlapping Intervals --> (Medium)

    Given an array of Intervals arr[][], where arr[i] = [starti, endi]. The task is to merge all of the overlapping Intervals.

    Examples:
    Input: arr[][] = [[1, 3], [2, 4], [6, 8], [9, 10]]
    Output: [[1, 4], [6, 8], [9, 10]]
    Explanation: In the given intervals we have only two overlapping intervals here, [1, 3] and [2, 4] which on merging will become [1, 4]. Therefore we will return [[1, 4], [6, 8], [9, 10]].

    Input: arr[][] = [[6, 8], [1, 9], [2, 4], [4, 7]]
    Output: [[1, 9]]
    Explanation: In the given intervals all the intervals overlap with the interval [1, 9]. Therefore we will return [1, 9].


    Expected Complexities
    Time Complexity: O(n log n)
    Auxiliary Space: O(1)

*/



function getOverlappingIntervals(arr) {

    if(arr.length == 0) return []

    const sorted = arr.sort((a,b) => a[0] - b[0])
    // console.log(sorted)

    const res = []
    res.push(sorted[0])
    // console.log(res)

    for(let i=0; i<sorted.length; i++) {
        let last = res[res.length - 1]
        let curr = sorted[i]

        if(curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1])
        }
        else {
            res.push(curr)
        }
    }

    return res

}


let arr = [[1, 3], [2, 4], [3, 5], [6, 8], [9, 10]]
// arr = [[6, 8], [1, 9], [2, 4], [4, 7]]
const res = getOverlappingIntervals(arr)
console.log(res)
