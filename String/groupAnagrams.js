/*

    Group Anagrams --> (Medium)

    Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

    Explanation:
    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.


    Example 2:
    Input: strs = [""]
    Output: [[""]]


    Example 3:
    Input: strs = ["a"]
    Output: [["a"]]


*/


function groupAnagarms(strArr) {

    let temp = []

    for (ele of strArr) {
        ele = ele.split('').sort().join('')
        temp.push(ele)
    }

    let resArr = []
    for (let i = 0; i < temp.length; i++) {

        if (temp[i] !== -1) {

            let res = [temp[i]]
            for (let j = i + 1; j < temp.length; j++) {

                if (temp[i] == temp[j] && temp[j] !== -1) {
                    res.push(temp[j])
                    temp[j] = -1
                }

            }

            resArr.push(res)
        }

    }

    return resArr

}


function groupAnagarmsI(strs) {

    let table = {}

    let resArr = [], emptyStrCount = 0


    for (ele of strs) {

        /*
            if(ele.includes(strs)) {
            }
        */
        table[ele] = ele.split('').sort().join('')
    }

    // console.log(table)


    for (let str of strs) {

        str = str.split('').sort().join('')

        let res = []

        if (str.length == 0) {
            emptyStrCount++
        }

        else {

            for (ele in table) {

                if (table[ele] == str) {
                    res.push(ele)
                    delete table[ele]
                }
            }

            if (res.length > 0) {
                resArr.push(res)
            }

        }

    }


    let emptyStrArr = []
    while (emptyStrCount > 0) {
        emptyStrArr.push("")
        emptyStrCount--
    }

    if (emptyStrArr.length > 0) resArr.push(emptyStrArr)

    return resArr

}


function groupAnagarmsII(arr) {

    let res = [];
    let mp = new Map();

    const MAX_CHAR = 26;

    for (let i = 0; i < arr.length; i++) {
        let key = getHash(arr[i]);

        console.log('key --> 😉', key)

        // If key is not present in the hash map, add
        // an empty group (array) in the result and
        // store the index of the group in hash map
        if (!mp.has(key)) {
            mp.set(key, res.length);
            res.push([]);
        }

        // Insert the string in its correct group
        res[mp.get(key)].push(arr[i]);
    }

    console.log('map', mp)

    return res;


    // Function to generate hash of word s
    function getHash(s) {
        let freq = Array(MAX_CHAR).fill(0);

        // Count frequency of each character
        for (let i = 0; i < s.length; i++) {
            let ch = s[i];
            freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        // Create hash string using join to avoid string concatenation in the loop
        let hashArray = [];
        for (let i = 0; i < MAX_CHAR; i++) {
            hashArray.push(freq[i].toString());
            hashArray.push('$');
        }

        return hashArray.join('');
    }

}



function groupAnagarmsIII(strs) {

    if(strs == null && strs.length == 0 ) {
        return [[strs]]
    }

    const freqStringMap = new Map()

    for(let ele of strs) {

        const freqString = getFreqencyString(ele)

        if(freqStringMap.has(freqString)) {
            freqStringMap.get(freqString)
        }

        else {
            let strArr = []
            strArr.push(ele)

            
        }


    }


    function getFreqencyString(str) {



    }



}



let strs = ["eat","tea","tan","ate","nat","bat"]
// let strs = ['']
// let strs = ["a"]
// let strs = ['', '']
// let strs = ['c', 'c'] // --> ?
// const res = groupAnagarms(strs)
const res = groupAnagarmsII(strs)
console.log(res)

