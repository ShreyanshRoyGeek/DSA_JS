/*

    The Celebrity Problem --> (Medium)

    A celebrity is a person who is known to all but does not know anyone at a party. A party is being organized by some people. A square matrix mat[][] of size n*n is used to represent people at the party such that if an element of row i and column j is set to 1 it means ith person knows jth person. You need to return the index of the celebrity in the party, if the celebrity does not exist, return -1.
    Note: Follow 0-based indexing.

    Examples:

    Input: mat[][] = [[1, 1, 0],
    [0, 1, 0],
    [0, 1, 1]]
    Output: 1
    Explanation: 0th and 2nd person both know 1st person and 1st person does not know anyone. Therefore, 1 is the celebrity person.


    Input: mat[][] = [[1, 1], 
    [1, 1]]
    Output: -1
    Explanation: Since both the people at the party know each other. Hence none of them is a celebrity person.


    Input: mat[][] = [[1]]
    Output: 0


    Expected Complexities:
    Time Complexity: O(n)
    Auxiliary Space: O(1)


*/


function getCelebrity(mat) {

    let knowMe = [], iKnow = []
    let n = mat.length, m = mat[0].length

    for(let i=0; i<n; i++) {
    
        for(let j=0; j<m; j++) {

            if(mat[i][j]  == 1) {
                knowMe[j] = (knowMe[j] || 0) + 1
                iKnow[i] = (iKnow[i] || 0) + 1
            }
        }

    }

    // console.log(knowMe)
    // console.log(iKnow)

    for(let i=0; i<n; i++) {
        if(knowMe[i] == n && iKnow[i] == 1) {
            return i
        }
    }

}


function getCelebrityI(mat) {

    let n = mat.length

    let i = 0, j = n-1

    while(i<j) {

        // i know j, so, i can't be a celebrity
        if(mat[i][j] == 1) {
            i++
        }
        // else j can't be a celebrity
        else {
            j--
        }

        // i point to our celebrity candidate
        let c = i

        //  Check if c is actually celebrity or not
        for(let i=0; i<n; i++) {
            if(i == c) continue

            // if any person does not c and c doesn't know any person return -1         
            if(mat[c][i] || !mat[i][c]) return -1
        }

    }

    return c

}


function getCelebrityII(mat) {

    let st = [], n = mat.length

    for(let i=0; i<n; i++) {
        st.push(i)
    }

    // console.log(st)

    while(st.length > 1) {

        let a = st.pop()
        let b = st.pop()

        if(mat[a][b] !== 0) {
            st.push(b)
        }
        else {
            st.push(a)
        }
    }

    
    let c = st.pop()

    for(let i=0; i<n; i++) {

        if(i==c) continue

        if(mat[i][c] !== 1 || mat[c][i] !== 0) {
            return -1
        }
    }

    return c


}



let mat = [
            [1, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ]

mat = [[1, 1], [1, 1]]

const res = getCelebrityII(mat)
console.log(res)


