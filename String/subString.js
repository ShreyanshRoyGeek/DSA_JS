
function subString(str) {

    str = str.split('')

    for(let k=0; k<str.length; k++) {

        for(let i=0; i<str.length; i++) {
    
            let subStrArr = []
    
            for(let j=k; j<=i; j++) {
                subStrArr.push(str[j])
            }

            if(subStrArr.length > 0) {
                console.log(subStrArr)
            }

        }

    }

}



let driverStr = "Hello"

subString(driverStr)
