/*
    
    Print name 5 times
    Print linearly from 1 to n
    Print from n to 1

*/


function printName() {

    let count  = 1
    print()

    function print() {

        if(count > 5) return
        console.log('Shreyansh Roy')
        count++
        print()

    }
}

function printFrom1toN(n) {

    let count = 1

    printLinerly()

    function printLinerly() {

        if(count > n) return

        console.log(count)
        count++

        printLinerly()
    }

}

function printFromNto1(n) {

    let count = n

    printLinerly()

    function printLinerly() {

        if(count <= 0) return

        console.log(count)
        count--

        printLinerly()
    }

}

// using backtrack
function printFrom1toNusingBacktrack(n) {

    printLinerly(n, n)

    function printLinerly(i, n) {

        if(i < 1) return
        
        printLinerly(i-1, n)

        console.log(i)
    }

}

// using backtrack
function printFromNto1usingBacktrack(n) {

    printLinerly(1, n)

    function printLinerly(i, n) {

        if(i > n) return 

        printLinerly(i+1, n)

        console.log(i)

    }

}


// printName()

// printFrom1toN(10)

// printFromNto1(10)

// printFrom1toNusingBacktrack(10)

printFromNto1usingBacktrack(10)





