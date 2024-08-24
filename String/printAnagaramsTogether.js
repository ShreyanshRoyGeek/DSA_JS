/*

*/


function printAnagramsTogether(strlist) {

    let table = new Map()

    // let table = {}

    for(let i=0; i<n; i++){
            
        let temp = string_list[i].split('').sort().join('')
    
        if(!table.get(temp)) {
           table.set(temp, [string_list[i]])
        }
        else {
            const data = table.get(temp)
            data.push(string_list[i])
        }
        
        /*if(!table[temp]) {
           table[temp] = [string_list[i]]
        }
        else {
            table[temp].push(string_list[i])
        }*/
        
    }

    // console.log(table)
        
    let resArr = []
        
    for(let [key, value] of table) {
        resArr.push(value)
    }

    /*for(let ele in  table) {
        resArr.push(table[ele])
    }*/
    
    return resArr


}