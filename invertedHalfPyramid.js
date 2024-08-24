
function printInvertedHalfPyramid(numberOfRows) {

    let str = "" 
    for(let i=1; i<=numberOfRows; i++) {

        for(let j=1; j<=(numberOfRows-i) ; j++) {
            str += "   "
        }

        for(let j=1; j<=i; j++) {
            str += " * "
        }
        str += "\n"
    }

    console.log(str)
}


function printInvertedHalfPyramidWithNumber(numberOfRows) {

    let str = ""
    for(let i=1; i<=numberOfRows; i++){

        let count = 1

        for(let j=1; j<=(numberOfRows - i + 1); j++){
           str += ` ${count} `
           count ++
        }

        // space logic is not needed -- as space are at the end of each column
        for(let space=1; space<=(i - 1); space++){
            str += "   "
        }

        str += "\n"
        
    }

    console.log(str)

}


function printFloydsTriangle(numberOfRows) {

    let count = 1
    let str = ''

    for(let line=1; line<=numberOfRows; line++) {

        for(let j=1; j<=line; j++){

            str += ` ${count} `
            count++
        }

        str += '\n'
    }

    console.log(str)

}

function printZeroOneTriangle(numberOfRows) {

    let str = ''

    for(let i=1; i<=numberOfRows; i++) {

        for(let j=1; j<=i; j++){

            if((i+j) %2 == 0){
                str += " 1 "
            }
            else {
                str += " 0 "
            }
        }
        str += '\n'
    }

    console.log(str)
}


// printInvertedHalfPyramid(5)

// printInvertedHalfPyramidWithNumber(5)

// printFloydsTriangle(5)

printZeroOneTriangle(5)



/*  
    printInvertedHalfPyramid 

    i/p --> 5
    o/p -->     

    * 
    *  *
    *  *  *
    *  *  *  *
    *  *  *  *  *
*/


/*  
    printInvertedHalfPyramidWithNumber 
    
    i/p --> 5
    o/p -->   

    1  2  3  4  5 
    1  2  3  4
    1  2  3
    1  2
    1
*/



/*  
    printFloydsTriangle 
    
    i/p --> 5
    o/p -->   

    1 
    2  3
    4  5  6
    7  8  9  10
    11  12  13  14  15

*/


/*  
    printZeroOneTriangle 
    
    i/p --> 5
    o/p -->   

    1 
    0  1
    1  0  1
    0  1  0  1
    1  0  1  0  1

*/


