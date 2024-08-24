
function findPairOfMaximumProduct(arr) {

    let maxProductValue = 0
    let pair = 0

    for(let i=0; i<arr.length; i++) {

        for(j=i+1; j<arr.length; j++) {

            if((arr[i]*arr[j]) > maxProductValue) {

                maxProductValue = arr[i] * arr[j]
                pair = [arr[i], arr[j]]

            }
        }

    }

    return pair

}


function findPairOfMaximumProductII(arr) {

    let maxProductValue = 0
    let maximumProductPair = []

    let n = arr.length

    arr.sort((a,b) => { return a-b} )

    console.log("arr", arr)

    let product1 = arr[0] * arr[1]
    
    let product2 = arr[n-1] * arr[n-2] 


    if(product1 > product2) {
        return [arr[1], arr[0]]
    }

    else {
        return [arr[n-2],arr[n-1]]
    }

}

// let driverArr = [1, 8, 3, 6, 7, 0]
let driverArr = [-1, -3, -6, 3, 0, -5]

console.log(findPairOfMaximumProductII(driverArr))


