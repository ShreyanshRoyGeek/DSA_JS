/*
    Min Number of Flips --> String (Easy)

    Given a binary string, that is it contains only 0s and 1s. 
    We need to make this string a sequence of alternate characters by flipping some of the bits, our goal is to minimize the number of bits to be flipped.


    Input:
    S = "001"
    Output: 1
    Explanation: 
    We can flip the 0th bit to 1 to have
    101.


    Input:
    S = "0001010111" 
    Output: 2
    Explanation: We can flip the 1st and 8th bit 
    bit to have "0101010101"
    101.


    Your Task:
    You don't need to read input or print anything. Your task is to complete the function minFlips() which takes the string S as input and returns the minimum number of flips required.

    Expected Time Complexity: O(|S|).
    Expected Auxiliary Space: O(1).

*/

function minNumberOfFlips(str) {

    if (str.length == 1) return 0

    let modifiyCount = 0

    if (str[str.length - 1] == '0') {

        for (let i = str.length - 2; i >= 0; i=i-2) {

            if(str[i] !== '1') {
                modifiyCount++
            }
            else if(str[i-1] !== '0')  {
                modifiyCount++
            }

        }
    }
    else {

        for (let i = str.length - 2; i > 0; i=i-2) {

            if(str[i] !== '0') {
                // console.log('1', i)
                modifiyCount++
            }
            else if(str[i-1] !== '1') {
                // console.log('0', i)
                modifiyCount++
            } 

        }
    }

    return modifiyCount

}


let driverStr = "001"
driverStr = '0001010111'
const res = minNumberOfFlips(driverStr)
console.log('res', res)

