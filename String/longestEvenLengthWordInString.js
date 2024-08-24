

function longestEvenLengthWordInString(str) {

    str = str.split(" ")

    let longestEvenWord = ""
    let longestEvenWordLength = 0

    for(let i=0; i<str.length; i++) {

        if(str[i].includes(",")) {

            /*if((str[i].length - 1 % 2) === 0) {
                if(longestEvenWordLength < str[i].length) {
                    longestEvenWordLength  = str[i].length
                    longestEvenWord = str[i].subString(0, str.length-1)
                }
            }*/

            str[i] = str[i].slice(0, str[i].length-1)

        }
        // else {

            if((str[i].length % 2) === 0) {
    
                if(longestEvenWordLength < str[i].length) {
                    longestEvenWordLength  = str[i].length
                    longestEvenWord = str[i]
                }
            }

        // }
    }

    return longestEvenWord
}


let driverStr = "Be not afraid of greatness, some are born great, some achieve greatness, and some have greatness thrust upon them"
console.log(longestEvenLengthWordInString(driverStr))

