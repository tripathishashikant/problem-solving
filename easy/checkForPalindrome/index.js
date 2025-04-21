/**
Function 1 check using javascript inbuild methods
*/
const str = 'Never Odd, or Even!'

function checkPalindrome(str) {
    if (str.length === 0 || typeof str !== 'string') return undefined;
    
    const regex = /[a-zA-Z0-9]/
    const ogStr = str.split('').filter((char) => regex.test(char)).join('').toLowerCase()
    
    const reverseStr = ogStr.split('').reverse().join('')
    
    return ogStr === reverseStr
}

console.log('First ', checkPalindrome(str))

/**
Function 2 check without using javascript inbuild methods
*/

const str1 = "never, odd or even!"

function reverseStr(str) {
    let revStr = ''
    
    for (let i = (str.length - 1); i >= 0; i -= 1) {
        revStr += str[i]
    }
    
    return revStr
}

function checkPalindromeWitoutInbuiltMethods(str) {
    if (str.length === 0 || typeof str !== 'string') return undefined;
    
    const regex = /[a-zA-Z0-9]/
    let tempStr = ''
    
    for (let i = 0; i < str.length; i += 1) {
        if (!regex.test(str[i])) continue;
        
        tempStr += str[i]
    }
    
    return tempStr === reverseStr(tempStr)
}

console.log('Second ', checkPalindromeWitoutInbuiltMethods(str1))