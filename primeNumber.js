
function isPrime(num)  {

    let isPrime = true 

    if(num == 2){
        return isPrime
    }

    for(let i=2; i<Math.sqrt(num); i++) {

        if(num % i == 0){
            isPrime = false
            return isPrime
        }
    }

    return isPrime

}

let out = isPrime(12)

console.log("isPrime", out)