/**
  Problem: Given a string and a non-empty substring, find the number of occurrences of the substring in the string.

  Example: Input: string = "Hello World", substring = "ll" Output: 2

  Constraints:

  Perform a case-sensitive search.
  You can use only built-in JavaScript string methods.
  Can you solve this problem?
*/

const str = "never, oddedd the or ended!"
const searchStr = 'ded'

function findOccuranceInString(strToSearch, searchStr) {
    if (
        strToSearch.length === 0 ||
        typeof strToSearch !== 'string' ||
        searchStr.length === 0 ||
        typeof searchStr !== 'string'
    ) 
        return undefined;
    
    const regex = new RegExp(searchStr, 'g')
    
    return strToSearch.match(regex).length
}

console.log(findOccuranceInString(str, searchStr))