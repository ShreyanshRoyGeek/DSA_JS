/*
    49. Group Anagrams  --> (Medium)

    Given an array of strings, group anagrams together.

    Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"] 
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

    Example 2:
    Input: strs = [""]  
    Output: [[""]]
    
    Example 3:
    Input: strs = ["a"]
    Output: [["a"]]

    Constraints:
    1 <= strs.length <= 104     
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.


*/




function groupAnagrams(strs) {
    let map = new Map()
    
    for (let str of strs) {

        let sortedStr = str.split("").sort().join("")

        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str)
        } else {
            map.set(sortedStr, [str])
        }       
    
    }

    console.log(map)

    return Array.from(map.values())

}


function groupAnagramsOld(strs) {

    let table = {}

    for (let str of strs) {
        let sortedStr = str.split("").sort().join("")       
        
        if (table[sortedStr]) {
            table[sortedStr].push(str)
        }           
        else {
            table[sortedStr] = [str]
        }
    }

    console.log(table)          
    return Object.values(table)

}

let strs = ["eat","tea","tan","ate","nat","bat"]                
console.log(groupAnagramsOld(strs))

    





