

function sumOfElementsOfArray(arr, i, sum) {
    
    if(i == arr.length) return 

    sum += arr[i]
    
    if(i == arr.length - 1) return sum 

    const totalSum  = sumOfElementsOfArray(arr, i+1, sum)

    return totalSum

}

function sumOfElementsOfAnArrayII(arr, n) {

    if(n < 0) return 0

    const sumnm1 = sumOfElementsOfAnArrayII(arr, n-1)

    return sumnm1 + arr[n]  // 5 + 4 + 3 + 2 + 1

}


function sumOfElementsTillN(n) {

    if(n==0) return 0

    const sumnm1 = sumOfElementsTillN(n-1)

    return n + sumnm1

}



function caluculatePToThePowerOFX(p, x, count, res) {

    res = res * p 

    if(count == x) {
        return res
    }

    const out = caluculatePToThePowerOFX(p, x, count+1, res)

    return out

}


function powXToN(x, n) {

    if(n == 0) {
        return 1
    } 

    let xnm1 = powXToN(x, n-1)

    return x * xnm1
}


// const res = powXToN(4,5)
// console.log(res)


// const output = caluculatePToThePowerOFX(2,5,0,1)
// console.log(output)


const arr = [1,2,3,4,5]
let sum = 0

// const res = sumOfElementsOfArray(arr, 0, sum)
// console.log(res)


// const res = sumOfElementsOfAnArrayII(arr, arr.length - 1)
// console.log(res)


const res = sumOfElementsTillN(10)
console.log(res)

