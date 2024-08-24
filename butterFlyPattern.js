
function printButterFlyPattern(noOfRows) {

    let str = ""

    for(let i=1; i<=noOfRows; i++) {

        for(let j=1; j<=i; j++) {
            str += " * "
        }

        for(space=1; space<=(2 * (noOfRows-i)); space++) {
            str +=  "   "
        }

        for(let j=1; j<=i; j++) {
            str += " * "
        }

        str += "\n"
    }

    for(let i=noOfRows; i>=1; i--) {

        for(let j=1; j<=i; j++) {
            str += " * "
        }

        for(space=1; space<=(2 * (noOfRows-i)); space++) {
            str +=  "   "
        }

        for(let j=1; j<=i; j++) {
            str += " * "
        }

        str += "\n"
    }

    console.log(str)

}


function printSolidRohmbous(noOfRows) {

    let str = ""

    for(let i=1; i<= noOfRows; i++) {

        for(let space=1; space<= (noOfRows -i); space++){

            str += "   "
        }

        for(let k=1; k<=noOfRows; k++ ) {

            str += " * "
        }
        str += "\n"
    }

    console.log(str)
}


function printHollowRhombus(noOfRows) {

    let str = ""

    for(let i=1; i<=noOfRows; i++) {

        for(let space=1; space<= (noOfRows -i); space++){

            str += "   "
        }

        for(let j=1; j<= noOfRows; j++) {

            if(i==1 ||  i==noOfRows || j==1 || j==noOfRows) {

                str += " * " 
            }
            else{
                str += "   "
            }
        }

        str += "\n"
    }

    console.log(str)
}


// printButterFlyPattern(5)
// printSolidRohmbous(5)
printHollowRhombus(5)



/*  
    printButterFlyPattern 
    
    i/p --> 5
    o/p -->   

    *                          * 
    *  *                    *  *
    *  *  *              *  *  *
    *  *  *  *        *  *  *  *
    *  *  *  *  *  *  *  *  *  *
    *  *  *  *  *  *  *  *  *  *
    *  *  *  *        *  *  *  *
    *  *  *              *  *  *
    *  *                    *  *
    *                          *

*/



/*  
    printSolidRohmbous 
    
    i/p --> 5
    o/p -->   

                    *  *  *  *  * 
                *   *  *  *  *    
            *   *   *  *  *       
        *   *   *   *  *
    *   *   *   *   *

*/


/*  
    printHollowRhombus 
    
    i/p --> 5
    o/p -->   

                    *  *  *  *  * 
                *           *
            *           *
        *           *
    *  *  *  *  *

*/ 

