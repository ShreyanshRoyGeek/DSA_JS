// console.log("Hello world!")

let str = ''
for(let line=1; line<=5; line++){

    for(let j=1; j<=line; j++){

        str += " " +  j
    }
    str += '\n'
}

console.log(str)

/* Output 

1
1 2
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/