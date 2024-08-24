
function tilingProblem(n) { // 2 * n (floor size)

    // base case
    if(n == 0 || n == 1) {
        return 1
    }

    // horizontal
    let fnm1 = tilingProblem(n-1)

    // vertical
    let fnm2 = tilingProblem(n-2)

    const totalWays = fnm1 + fnm2

    return totalWays

}


console.log(tilingProblem(4))


