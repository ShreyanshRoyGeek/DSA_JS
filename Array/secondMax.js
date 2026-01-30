

function secondMaximum(arr) { // 0(n) - time

    let table = {}

    for(let i=0; i<arr.length; i++) {
        table[arr[i]] =  ( table[arr[i]] || 0 ) + 1
    }


    let firstMax = -Infinity
    for(let ele in table){
        if(table[ele] > firstMax) {
            firstMax = table[ele]
        }
    }

    let secMax = -Infinity
    let secMaxEle = null
    for(let ele in table){
        if(table[ele] < firstMax && table[ele] > secMax) {
            secMax = table[ele]
            secMaxEle = ele
        }
    }

    return secMaxEle


}


// let arr = ['a', "b", "c", "b", "a", 'a', 'b', 'b']
let arr = ['a', "b", "c", "b", "a", 'a', 'd', 'd', 'd', 'd', 'd']

const res = secondMaximum(arr)
console.log(res)

