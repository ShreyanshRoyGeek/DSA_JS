/*
    Maximum Sum of Non-Adjacent Elements

    ** DP on Sub-sequences **

*/


function calculate(n, arr) {

    if(n==0) return arr[0]

    if(n<0) return 0

    const pick = arr[n] + calculate(n-2, arr)

    const notPick = 0 + calculate(n-1, arr)

    return Math.max(pick, notPick)

}



function calculateI(n, arr) {

    if(n==0) return arr[0]

    if(n<0) return 0

    if(dp[n] !== -1) {
        return dp[n]
    }

    const pick = arr[n] + calculateI(n-2, arr)

    const notPick = 0 + calculateI(n-1, arr)

    return dp[n] = Math.max(pick, notPick)

}



function calculateII(n, arr) {

    //Bottom-up approach 

    dp[0] = arr[0]

    let neg = 0

    for(let i=1; i<n; i++) {

        let take = arr[neg]
        
        if(i>1) {

            take += dp[i-2]
        }

        const nonTake = 0 + dp[i-1]

        dp[i] = Math.max(take, nonTake)

    }

}



function calculateIII(n, arr) {

    let prev = arr[0]

    let prev2 = 0

    for(let i=1; i<=n; i++) {

        let take = arr[i]

        if(i>1)  {
            take += prev2
        }

        const nonTake = 0 + prev

        const curr = Math.max(take, nonTake)

        prev2 = prev

        prev = curr

    }

    return prev

}




function maximumSumOfNonAdjElem(arr) {

    const res = calculateIII(arr.length - 1, arr)
    return res

}




const arr = [2,1,4,9]

const dp = new Array(arr.length).fill(-1)

const res = maximumSumOfNonAdjElem(arr)

console.log('res', res)

// console.log('dp', dp)



