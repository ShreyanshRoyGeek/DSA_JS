
function allPossibleContiguiousSubString(str) {

    let tempArr = []
    
    for(let k=0; k<str.length; k++) {

        for(let i=k; i<str.length; i++) {

            let tempStr = ''
            
            for(let j=k; j<=i; j++) {
                tempStr += str[j]
            }
            
            if(tempStr) {
                tempArr.push(tempStr)
            }

        }

    }

    return tempArr

}

let str = "abcd"

const res = allPossibleSubString(str)
console.log('res', res)

