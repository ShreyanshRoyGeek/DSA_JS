
function smallestSubsetWithGreaterSum(arr) {

    arr = arr.sort((a, b) => b - a)

    for (let i = 0; i < arr.length; i++) {

        let sum = 0
        for (let j = 0; j <= i; j++) {
            sum += arr[j]
        }

        let remSum = 0
        for (let k = i + 1; k < arr.length; k++) {
            remSum += arr[k]
        }

        if (sum > remSum) return i + 1

    }

    return 0
}


let arr = [2, 17, 7, 3]
arr = [20, 12, 8, 4]
arr = [12, 1, 1, 2, 10]
const res = smallestSubsetWithGreaterSum(arr)
console.log(res)

