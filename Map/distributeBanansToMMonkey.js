
function distributeBananasOld(N, monkeys) {

    if(monkeys == 1 ) {
        return -1 // All banannas cannot be distributed to one monkeys
    }

    // Check if there are enough bananas to distribute
    if (N < monkeys * (monkeys + 1) / 2) {
        return -1; // Not enough bananas to distribute equally
    }

    // Check if the number of bananas can be distributed equally
    if (N % monkeys !== 0) {
        return -1; // Cannot distribute bananas equally
    }

    // Calculate the number of bananas each monkey gets
    const bananasPerMonkey = N / monkeys;
    return bananasPerMonkey;
    
}


function distributeBananas(N, monkeys) {

    // Check if there are enough monkeys to distribute bananas
    if (monkeys === 0 || N / monkeys < 2) {
        return -1; // Not enough monkeys or each monkey would get less than one banana
    }

    // Check if the number of bananas can be evenly distributed among monkeys
    if (N % monkeys !== 0) {
        return -1; // Cannot distribute bananas equally
    }

    // Calculate the number of bananas each monkey gets
    const bananasPerMonkey = N / monkeys;
    
    // Check if any monkey would receive all bananas
    if (bananasPerMonkey >= N) {
        return -1; // One monkey cannot receive all bananas
    }

    return bananasPerMonkey;
}


// Example usage
const N = 18; // Total number of bananas
const monkeys = 6; // Number of monkeys
const bananasPerMonkey = distributeBananasCustom(N, monkeys);
if (bananasPerMonkey !== -1) {
    console.log(`Each monkey gets ${bananasPerMonkey} bananas.`);
} else {
    console.log("Cannot distribute bananas equally.");
}


function distributeBananasCustom(N, monkey) {

    if(monkey === 0 || N === 1 || (N / monkey < 2)) {
        return -1
    }

    /*if(N < (monkey * monkey + 1)/2){
        return -1 // Not enough bananans (for consecutive order division)
    }*/

    else if(N % monkey !== 0) {
        return -1 // bananas cannnot be distributed equally 
    }

    let bananasPerMonkey = N / monkey

    if(bananasPerMonkey >= N){
        return -1 // no monkey will get all bananas
    }

    return bananasPerMonkey

}   

