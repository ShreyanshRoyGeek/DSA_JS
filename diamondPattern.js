
function printDiamondPattern(noOfRows) {

    let str = ""

    for(let i=1; i<=noOfRows; i++) {
    
        for(let space=1; space<=(noOfRows -i); space++) {
            str += "   "
        }

        for(let j=1; j<=(2*i -1); j++) {
            str += " * "
        }
        str += "\n"
    
    }

    for(let i=noOfRows; i>=1; i--) {
    
        for(let space=1; space<=(noOfRows -i); space++) {
            str += "   "
        }

        for(let j=1; j<=(2*i -1); j++) {
            str += " * "
        }

        str += "\n"
    
    }

    console.log(str)
}


function printNumberPyramid(noOfRows) {

    let str = ""

    for(let i=1; i<= noOfRows; i++) {

        for(let space=1; space<=(noOfRows -i); space++) {
            str += " "
        }
    
        for(let j=1; j<=i; j++) {
            str += `${i} `
        } 

        str += "\n"
    }
    
    console.log(str)
}

function patternPalindromicPattern(noOfRows) {

    let str = ""

    for(let i=1; i<=noOfRows; i++) {

        let count = i

        for(let space=1; space<=(noOfRows -i); space++) {
            str += "   "
        }

        for(let j=1; j<=(2*i -1); j++) {
            str += ` ${count} `

            if(i>j){
                count --
            }
            else {
                count++
            }
        }

        str += "\n"
    }

    console.log(str)
}


// printDiamondPattern(5)

// printNumberPyramid(5)

patternPalindromicPattern(5)



/*  
    printDiamondPattern 
    
    i/p --> 5
    o/p -->   

                 * 
              *  *  *
           *  *  *  *  *
        *  *  *  *  *  *  *
     *  *  *  *  *  *  *  *  *
     *  *  *  *  *  *  *  *  *
        *  *  *  *  *  *  *
           *  *  *  *  *
              *  *  *
                 *

*/



/*  
    printNumberPyramid 
    
    i/p --> 5
    o/p -->   
            1 
           2 2
          3 3 3
         4 4 4 4
        5 5 5 5 5
     

*/
