

const totRows = 4
const totCols = 5

let str = ""

for(let i=1; i<=totRows; i++) {

    for(j=1; j<=totCols; j++) {

        // cell -> (i,j)
        
        if(i==1 ||  i==totRows || j==1 || j==totCols) {

            str += " * " 
        }
        else{
            str += "   "
        }
    }

    str += "\n"
}


console.log(str)