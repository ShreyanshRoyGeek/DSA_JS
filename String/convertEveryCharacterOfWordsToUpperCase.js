
function convertFirstCharacterOfWordsToUpperCase(str) {

    str = str.split(" ")

    let newStr = []
    for(let i=0; i<str.length; i++) {

        let word = str[i]

        let wordStr = ""

        for(let j=0; j<word.length; j++) {

            if(j == 0) {
                wordStr = str[i][j].toUpperCase()
            }
            else {
                wordStr += str[i][j]
            }
        }

        newStr.push(wordStr)

    }

    return newStr.join(' ')

}

function conconverEveryCharacterOfWordsToUppeCase(str) {

    let words = str.split(" ")

    const upperaseWords = words.map(word => word.toUpperCase())

    return upperaseWords.join(" ")

}


function convertFirstCharacterOfWordsToUpperCaseII(str) {

    let words = str.split(' ')

    const cpatialFirstCharacterWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return cpatialFirstCharacterWords.join(' ')

}




let driverStr = "Hello world, welcome to js progarmming and dsa"

const res = convertFirstCharacterOfWordsToUpperCaseII(driverStr)

console.log(res)

