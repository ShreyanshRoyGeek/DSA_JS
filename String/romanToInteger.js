/*

    Roman Number to Integer --> String(Easy)

    Given a string in roman no format (s)  your task is to convert it to an integer . Various symbols and their values are given below.
    I 1
    V 5
    X 10
    L 50
    C 100
    D 500
    M 1000


    Input:
    s = V
    Output: 5


    Input:
    s = III 
    Output: 3


    Your Task:
    Complete the function romanToDecimal() which takes a string as input parameter and returns the equivalent decimal number. 

    Expected Time Complexity: O(|S|), |S| = length of string S.
    Expected Auxiliary Space: O(1)

 
*/


function romanToInteger(str) {

    let res = 0
    const map = new Map()

    map.set('I', 1)
    map.set('V', 5)
    map.set('X', 10)
    map.set('L', 50)
    map.set('C', 100)
    map.set('D', 500)
    map.set('M', 1000)


    for(let i=str.length-1; i>=0; i--) {

        if(map.get(str[i]) < map.get(str[i+1])) {
            res -= map.get(str[i])
        }
        else {
            res += map.get(str[i])
        }

    }

    return res

}


const string = 'XC'
const res = romanToInteger(string)

console.log('res', res)


