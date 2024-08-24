let str = ''

let count = 0

for(let line=1; line<=10; line++){

    for(let j=1; j<=line; j++){

        str += " " +  String.fromCharCode(65 + count)
        count++
    }
    
    str += '\n'
}

console.log(str)

/* Output 

A        
B C      
D E F    
G H I J  
K L M N O

*/