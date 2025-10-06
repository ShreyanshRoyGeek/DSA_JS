/*
    Reverse a string using stack
*/


function reverseAString(str) {
    let st = []

    for(let i=0; i<str.length; i++) {
        st.push(str[i])
    }

    let temp = ''

    while(st.length > 0) temp += st.pop()

    return temp

}


let str = "abcdef"
const res = reverseAString(str)
console.log(res)

