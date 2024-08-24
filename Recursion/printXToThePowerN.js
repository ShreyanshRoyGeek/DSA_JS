
function pow (x, n) {

    if(n == 0) {
        return 1
    }

    let xnm1 = pow(x, n-1)
    let xn = x * xnm1 
    return xn

}


function optimizedPow (x, n) { // O(logn)
 
    if(n == 0) {
        return 1
    }

    const halfPow = optimizedPow(x, Math.floor(n/2))
    let halfPowSq = halfPow * halfPow

    if(n%2 !== 0) {
        halfPowSq =  x * halfPowSq 
    }
    return halfPowSq

}


console.log(optimizedPow(2, 7))

