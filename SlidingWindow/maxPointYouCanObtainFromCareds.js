/*

    Maximum points can be obtained from cards from left and right with k

    Example : 
    Input = [6, 2, 3, 4, 7, 2, 1, 7, 1]
    k = 4
    Output : 16 --> [6, 2, 7, 1]

*/



function maxPointsFromCards(arr, k) {

    let n = arr.length, sum = 0, maxPoint = 0
    
    // first window from left
    for(let i=0; i<k; i++) {
        sum += arr[i]
    }

    maxPoint = sum

    let r = n-1

    for(let i=k-1; i>=0; i--) {

        sum -= arr[i]
    
        sum += arr[r]

        maxPoint = Math.max(maxPoint, sum)

        r--

    }

    return maxPoint

}


let arr = [6, 2, 3, 4, 7, 2, 1, 7, 1]
let k = 4
const res = maxPointsFromCards(arr, k)
console.log(res)


