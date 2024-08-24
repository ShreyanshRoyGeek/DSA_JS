
function alternateSumSeries(n) {

    if(n == 0) return 0 

    if(n%2 == 0) {
        return alternateSumSeries(n-1) - n
    }
    else {
        return alternateSumSeries(n-1) + n
    }

}


const res = alternateSumSeries(4)
console.log(res)


