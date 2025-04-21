# 🧠 Check if All Elements Are Numbers

## 📝 Problem Statement  
Write a function that checks whether all elements in a given array are numbers.

### ✅ Example:
```js
Input: 'Never Odd, or Even!'  
Output: true
```

---

## 🔍 Step 1: Understand the Problem

### 🧾 Input:
- String

### 📤 Output:
- **true** if reverse of string is same
- **false** if reverse of string is not same
- **Constrain** Ignore special charater within the string
---

## 🧱 Step 2: Plan the Logic (Pseudocode)

1. Initialize a variable with empty string
2. Remove special characters, blank space and convert the original string to lowercase and store it in variable
3. Now reverse the original string and store it in a variable
4. Now compare both of them and return true if both are same else return false
---

## ⚠️ Step 3: Handle Edge Cases Like a Pro

Let’s ask the right questions:

| Scenario                         | Expected Behavior             |
|----------------------------------|-------------------------------|
| str is `null` or `undefined`     | Return undefinec              |
| str is not an String             | Return ''                     |


### 🧠 Final Notes:
- split
- reverse
- join

---

### 🔒 Final Version with Edge Case Handling:
[👉 View Final Code in `index.js`](./index.js)

```js
function checkPalindrome(str) {
    if (str.length === 0 || typeof str !== 'string') return undefined;
    
    const regex = /[a-zA-Z0-9]/
    const ogStr = str.split('').filter((char) => regex.test(char)).join('').toLowerCase()
    
    const reverseStr = ogStr.split('').reverse().join('')
    
    return ogStr === reverseStr
}
```

```js
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
```

---

## 🎓 What I Learned

- 🧮 Learned how `.split()` works for converting string to array
- 🧮 Learned how `.test()` method can be used to compare string 
- 🧮 Learned how to reverse sting using Array's `.reverse()` method and without it
- 🧮 Learned how Array's `.filter()` method can be used to remove unwanted elements
- 🔍 Realized the importance of input type-checking
- ✅ Understood how edge cases change the way I write code
