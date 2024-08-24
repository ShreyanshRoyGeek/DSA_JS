
// Here we wil going to practice Dyanmic Programming

// Top Down Approach -->  Recursion + Memoization

// Bottom Up Approach --> Tablulation --> Space Optimization



function fibonacci(n) {

    // recursive approach

    //  base case
    if(n <= 1) {
        return n
    }

    // dp check
    if(dp[n] !== -1) return dp[n]


    //  dp insertion
    dp[n] = fibonacci(n-1) + fibonacci(n-2)


    return dp[n]

}



function fibonacciII(n) {

    if(n<=1) return 1

    if(dp[n] !== -1) return dp[n]

    dp[n] = dp[n-1] + dp[n-1]

    return dp[n]

}



let n = 5
let dp = new Array(n+1).fill(-1)


// Recursive Approach

// let res = fibonacci(n) 
// console.log('res', res)

// console.log('dp ---> ', dp)



// Tabulation Approach

dp[0] = 0 , dp[1] = 1

for(let i=2; i<=n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
}

// console.log(dp)

// let res = fibonacciII(n) 
// console.log('res', res)



// Optimized tablular approach

let prev2 = 0
let prev1 = 1

for(let i=2; i<=n; i++) {

    let curr = prev2 + prev1
    prev2 = prev1
    prev1 = curr

}

console.log('res', prev1)



