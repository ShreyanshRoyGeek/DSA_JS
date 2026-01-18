/*
    Permutation 
*/

function permutation(arr) {

    let res = []
    findPermutation(arr, 0, res)

    return res

}

function findPermutation(arr, index, res) {

    if (index == arr.length) {
        res.push([...arr])
        return
    }

    for (let i = index; i < arr.length; i++) {

        [arr[index], arr[i]] = [arr[i], arr[index]];

        findPermutation(arr, index + 1, res);

        [arr[index], arr[i]] = [arr[i], arr[index]];


    }

}


let arr = [1, 2, 3]
const res = permutation(arr)
console.log(res)

