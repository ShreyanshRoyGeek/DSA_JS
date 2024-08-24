/*

Input:
N = 3, sum = 4
coins = {1,2,3}
Output: 4
Explanation: Four Possible ways are: {1,1,1,1},{1,1,2},{2,2},{1,3}.

*/

function countCoinChangeWays(coins, sum) {

    // dynamic programming approach
    const dp = new Array(sum + 1).fill(0);
    dp[0] = 1; // Base case: There's one way to make sum 0 (by not selecting any coin)


    // Iterate through each coin
    for (const coin of coins) {

        // Update dp array for each sum from coin to sum
        for (let i = coin; i <= sum; i++) {

            console.log("dp[i]", dp[i])

            console.log("dp[i - coin]", dp[i - coin])

            dp[i] += dp[i - coin];
        }

    }

    console.log(dp)
    return dp[sum];
}


function countCoinChangeWaysII(coins, sum) {

    const dp = new Array(coins.length + 1).fill(0).map(() => new Array(sum + 1).fill(0));

    // Base case: There's one way to make sum 0 (by not selecting any coin)
    for (let i = 0; i <= coins.length; i++) {
        dp[i][0] = 1;
    }

    // Iterate through each coin
    for (let i = 1; i <= coins.length; i++) {
        // Iterate through each sum from 1 to the target sum
        for (let j = 1; j <= sum; j++) {
            // If the current coin value is less than or equal to the current sum,
            // we can either include or exclude the coin
            if (coins[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
            }
            // If the current coin value is greater than the current sum,
            // we can only exclude the coin
            else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[coins.length][sum];
}


// Example usage:
const coins = [1, 2, 5];
const sum = 5;
console.log("Number of ways to make", sum, ":", countCoinChangeWays(coins, sum)); // Output: 4

