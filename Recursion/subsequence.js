/*

Subsequence --> Recursion (Medium)

Example 1:
Input: nums = abc
Output: 
    [
        [],
        [ 'c' ],
        [ 'b' ],
        [ 'b', 'c' ],
        [ 'a' ],
        [ 'a', 'c' ],
        [ 'a', 'b' ],
        [ 'a', 'b', 'c' ]
    ]

*/



function solve(str, index, output, resArr) {

    //base case
    if (index == str.length) {
        // console.log('output', output)
        resArr.push([...output])
        return
    }


    // not pick
    solve(str, index + 1, output, resArr)


    //pick
    output.push(str[index])
    solve(str, index + 1, output, resArr)


    //backtrack
    output.pop()
}



function subSequence(str) {

    let resArr = []
    let index = 0
    let output = []

    solve(str, index, output, resArr)

    return resArr
}



let str = "abc"
str = str.split('')
const res = subSequence(str)
console.log('res', res)


