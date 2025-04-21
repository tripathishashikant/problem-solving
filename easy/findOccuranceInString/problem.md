# 🧠 Check if String is Palindrome or not

## 📝 Problem Statement  
Given a string and a non-empty substring, find the number of occurrences of the substring in the string.

### ✅ Example:
```js
Input: string = "Hello World", search string = "ll"
Output: 2
```

---

## 🔍 Step 1: Understand the Problem

### 🧾 Input:
- String

### 📤 Output:
- **count** Number of occurance of search string
- **undefined** when empty or non string value is entered
---

## 🧱 Step 2: Plan the Logic (Pseudocode)

1. Search the number of occurance of search string in provided string
2. Use regex as we need to search in the string
3. return count
---

## ⚠️ Step 3: Handle Edge Cases Like a Pro

Let’s ask the right questions:

| Scenario                                  | Expected Behavior             |
|-------------------------------------------|-------------------------------|
| str is empty or `null` or `undefined`     | Return undefined              |
---

### 🔒 Final Version with Edge Case Handling:
[👉 View Final Code in `index.js`](./index.js)

```js
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
```

---

## 🎓 What I Learned

- 🧮 Learned how `Regex` constructer we can use to search for a pattern within the string. Also it is useful when we have to use dynamic patter (variable)
- 🧮 Learned how `.match()` string method can be used to check the occurance of patter in string 
- 🔍 Realized the importance of input type-checking
- ✅ Understood how edge cases change the way I write code
