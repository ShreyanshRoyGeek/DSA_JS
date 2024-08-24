/*

Input:
{([])}
Output: 
true
Explanation: 
{ ( [ ] ) }. Same colored brackets can form 
balanced pairs, with 0 number of 
unbalanced bracket.


Input: 
()
Output: 
true
Explanation: 
(). Same bracket can form balanced pairs, 
and here only 1 type of bracket is 
present and in balanced way.


Input: 
([]
Output: 
false
Explanation: 
([]. Here square bracket is balanced but 
the small bracket is not balanced and 
Hence , the output will be unbalanced.

*/

function parenthesisIsBalanced(str) {

	let tempStrArr = []

	for (let i = 0; i < str.length; i++) {

		let s = str[i]
		let end = ''

		if(s == "(" || s == "{" || s == "[" ) {
			tempStrArr.push(s)
		}
		else {
			switch (s) {
	
				case ')':
	
					end = tempStrArr.pop()
					if (end !== '(') {
						return false
					}
					break
	
				case '}':
	
					end = tempStrArr.pop()
					if (end !== '{') {
						return false
					}
					break
	
				case ']':
	
					end = tempStrArr.pop()
					if (end !== '[') {
						return false
					}
					break
			
			}
		}

	}

	if(tempStrArr.length > 0) {
		return false
	}

	return true
}


let driverStr1 = "{([])}"
let driverStr2 = "()"
let driverStr3 = "([]"
let driverStr4 = "(])"

const res = parenthesisIsBalanced(driverStr1)

console.log(res)

