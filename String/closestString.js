
function closestString(str, word1, word2) {

    str = str.split(" ")

    let word1Index = 0
    let word2Index = 0

    let minWordLength = Number.MAX_VALUE

    // console.log(word1)
    // console.log(word2)


    for(let i=0; i<str.length; i++) {

        if(str[i] == word1){
            word1Index = i
        }

        if(str[i] == word2){
            word2Index = i
        }

        if(word1Index > 0 || word2Index > 0) {

            // if(Math.abs(word1Index - word2Index) < minWordLength){
            //     minWordLength = Math.abs(word1Index - word2Index)
            // }

            minWordLength = Math.min(minWordLength, Math.abs(word1Index - word2Index))
        }
        
    }

    console.log(minWordLength)

}

// let driverStr =  "the quick brown fox quick"

// let word1 = "the"
// let word2 = "fox"

let driverStr = "geeks for geeks contribute practice"

let word1 = "geeks"
let word2 = "practice"

closestString(driverStr, word1, word2)

