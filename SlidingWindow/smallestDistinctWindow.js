/*

    Smallest distinct window --> (Medium)

    Given a string str, your task is to find the length of the smallest window that contains all the characters of the given string at least once.

    Example:
    Input: str = "aabcbcdbca"
    Output: 4
    Explanation: Sub-String "dbca" has the smallest length that contains all the characters of str.

    Input: str = "aaab"
    Output: 2
    Explanation: Sub-String "ab" has the smallest length that contains all the characters of str.

    Input: str = "geeksforgeeks"
    Output: 7
    Explanation: There are multiple substring with smallest length that contains all characters of str, "eksforg" and "ksforge". 

    Constraints:
    1 ≤ str.size() ≤ 105
    str contains only lower-case english alphabets.

    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(1)

*/


function getSmallestDistinctWindow(str) { // O(n) time and O(k) space

    let map = new Map()
    
    for(let i=0; i<str.length; i++) {
        const res = ( map.get(str[i]) || 0 ) + 1
        map.set(str[i], res)
    }


    let distinct = map.size
    let i=0, j=0, n=str.length
    let minSize = n
    let window = new Map()


    while(j<n) {
        const res = ( window.get(str[j]) || 0 ) + 1
        window.set(str[j], res)

        while(i<=j && window.size == distinct) {
            minSize = Math.min(minSize, j-i+1)
            const res = window.get(str[i]) - 1
            window.set(str[i], res)

            let curr = window.get(str[i])
            if(curr == 0){
                window.delete(str[i])
            }
            i++
        }
        j++

    }

    return minSize

}


let str = "aabcbcdbca"
const res = getSmallestDistinctWindow(str)
console.log(res)


