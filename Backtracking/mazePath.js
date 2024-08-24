

function calculateMazePath(sr,sc, er, ec) {

    if(sr > er || sc > ec) {
        return 0
    }

    else if(sr == er && sc == ec) return 1

    const downWays = calculateMazePath(sr+1, sc, er, ec)

    const rightWays = calculateMazePath(sr, sc+1, er, ec)

    const totalCounts = downWays + rightWays

    return totalCounts
    
}


function printMazePath(sr, sc, er, ec, str) {

    if(sr > er || sc > ec) return 

    else if(sr == er && sc == ec) {
        console.log(str)
        return 
    }

    // go right 
    printMazePath(sr, sc+1, er, ec, str +"R")

    // go down
    printMazePath(sr+1, sc, er, ec, str +"D")

}



const rows = 4
const cols = 4

const sr = 1, sc = 1

let count = calculateMazePath(sr, sc, rows, cols)

console.log("Total no of ways to travesrsal possible", count)

printMazePath(sr, sc, rows, cols, "")

