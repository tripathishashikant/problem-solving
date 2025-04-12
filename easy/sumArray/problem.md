# 🧠 Problem 1: Sum of Array

## 📝 Problem Statement
Write a function that returns the **sum** of all numbers in an array.

### ✅ Example:
```js
Input: [1, 2, 3, 4]  
Output: 10
```

---

## 🔍 Step 1: Understand the Problem

### 🧾 Input:
- An array of numbers (e.g., `[1, 2, 3]`)

### 📤 Output:
- A single number (the sum of all elements)

---

## 🧱 Step 2: Plan the Logic (Pseudocode)

1. Create a variable called `sum` and set it to 0.
2. Loop through each element in the array.
3. Add each number to `sum`.
4. Return the final value of `sum`.

---

## 💻 Step 3: Basic JavaScript Code

```js
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
```

---

## 🧪 Step 4: Test with Different Inputs

```js
sumArray([1, 2, 3, 4]);     // 10
sumArray([10]);             // 10
sumArray([]);               // 0
sumArray([-1, 5, -2]);      // 2
```

---

## ⚠️ Step 5: Handle Edge Cases Like a Pro

Let’s ask some smart questions:

| Scenario                    | Expected Behavior            |
|-----------------------------|------------------------------|
| arr is `null` or `undefined` | Return 0                     |
| arr contains non-numbers     | Ignore or throw error        |
| arr is not an array          | Return 0 or error            |

### 🧠 Final Notes:
- We are trying to convert the value to number and then we are checking for the presence of NaN, if found then we are skipping that value. This will consider the number provided as string.
- Edge case thinking = real dev mindset.

---

### 🔒 Final Version with Edge Case Handling:

[👉 View Final Code in `index.js`](./index.js)

```js
function sumArray(arr) {
  if (!Array.isArray(arr))
    return 0

  let sum = 0
  let arrLen = arr.length
  let num = 0

  for(let i = 0; i < arrLen; i += 1) {
    num = Number(arr[i])

    if (num !== num) continue

    sum += num
  }

  return sum
}
```

### 🧪 Extra Test Cases

```js
sumArray([1, "a", '2', null]);    // 3
sumArray();                     // 0
sumArray("hello");              // 0
sumArray([1000000000, 2]);      // 1000000002
```

---

## 🎓 What I Learned

- 🚩 Never trust the input blindly — always validate!
- 💡 "Simple" problems often have hidden edge cases.
- 🛠️ Handling weird inputs makes your code production-ready.
- 🤖 Problem solving is more about **thinking** than typing.
- 🧘 Practice sharpens the logic muscle — 1 small win at a time.
