# 🧠 Problem 1: Sum of Array

## 📝 Problem Statement
Given a string, reverse the order of its characters. You can use only build in javascript method. No external library or loop is allowed.

### ✅ Example:
```js
Input: 'Hello World'  
Output: 'dlroW olleH'
```

---

## 🔍 Step 1: Understand the Problem

### 🧾 Input:
- A string (e.g., `Hello world`)

### 📤 Output:
- A reverse string

---

## 🧱 Step 2: Plan the Logic (Pseudocode)

1. Convert that string into array.
2. Reverse that array and join it.
3. Return the final value of `tempStr`.

---

## 💻 Step 3: Basic JavaScript Code

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

---

## 🧪 Step 4: Test with Different Inputs

```js
sumArray('Hello');     // olleH
sumArray('1234');             // 4321
```

---

## ⚠️ Step 5: Handle Edge Cases Like a Pro

Let’s ask some smart questions:

| Scenario                              | Expected Behavior            |
|---------------------------------------|------------------------------|
| str is `empty`, `null` or `undefined` | Return `undefined`           |
| str is not a string value             | Convert it to string         |

### 🧠 Final Notes:
- We are trying to convert the value to string and then we will use that converted value to provide the result.
- Edge case thinking = real dev mindset.

---

### 🔒 Final Version with Edge Case Handling:

[👉 View Final Code in `index.js`](./index.js)

```js
function reverseString(str) {
  if ( str === null || str === undefined ) return undefined
  if ( str.length === 0 ) return ''
  if (typeof str !== 'string') str = str.toString()

  return str.split('').reverse().join('')
}
```

### 🧪 Extra Test Cases

```js
console.log(reverseString('Hello World')) // dlroW olleH
console.log(reverseString(12345)) // 54321
console.log(reverseString([])) // ''
console.log(reverseString([Infinity, NaN, 5])) // 5,NaN,ytinifnI
console.log(reverseString(null)) // undefined
console.log(reverseString(undefined)) // undefined
```

---

## 🎓 What I Learned

- 🚩 Never trust the input blindly — always validate!
- 💡 "Simple" problems often have hidden edge cases.
- 🛠️ Handling weird inputs makes your code production-ready.
- 🤖 Problem solving is more about **thinking** than typing.
- 🧘 Practice sharpens the logic muscle — 1 small win at a time.
