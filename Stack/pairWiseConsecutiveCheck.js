/*

*/



function pairWiseConsecutive(st) {

    if(st.arr.length % 2 == 1) {
        st.pop()
    }
    
    while(!st.empty()) {
        
        let a = st.top()
        st.pop()
        
        let b = st.top()
        st.pop()
        
        if(Math.abs(a-b) !== 1) {
            return false
        }
    
    }
    
    return true

}