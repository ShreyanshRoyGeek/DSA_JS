/*
    Delete middle elem from the stack
*/


function deleteMiddleElement(st) {

    let count = 0
    solve(st, count, st.length)

    function solve(st, count, size) {

        // base case
        if(count == Math.floor(size/2)) {
            st.pop()
            return
        }

        const temp = st[st.length -1]
        st.pop()

        // recursive call
        solve(st, count+1, size)

        st.push(temp)
        
    }

}


let stack = [1, 2, 3, 4, 5]
const res = deleteMiddleElement(stack)
console.log(stack)

