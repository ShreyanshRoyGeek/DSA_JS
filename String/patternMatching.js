/*

    Pattern Searching --> String (Easy)

    
    Given a text and a pat, the task is to check if the pat exists in the text or not.


    Input: text = "geeksforgeeks"
    pat = "geek"
    Output: 1
    Explanation: "geek" exists in
    "geeksforgeeks"



    Input: text = "geeksforgeeks"
    pat = "gfg"
    Output: 0
    Explanation: "gfg" does not exists in
    "geeksforgeeks"



    Your Task:  
    You don't need to read input or print anything. Your task is to complete the function search() which takes the texting two textings as inputs and returns 1 if the pat is found, otherwise 0.

    Expected Time Complexity: O(|text| + |pat|)
    Expected Auxiliary Space: O(|text| + |pat|)


*/


function patMatching(text, pat) {

    let tempStr = ""

    for(let i=0; i<text.length; i++) {

        let k = 0
        if(text[i] == pat[k]) {
            tempStr = text[i]

            for(let j=i+1; j<text.length; j++) {
                
                k++
                if(text[j] !== pat[k]) {
                    break
                }
                tempStr += text[j]

            }

            if(tempStr == pat) {
                return true
            }
        }
    }
    return false
}


let driverStr = "geeksforgeeks"
let patt = "forgeei"
driverStr = "ilbmywtxyu"
patt = "w"

const res = patMatching(driverStr, patt)
console.log('res', res)

