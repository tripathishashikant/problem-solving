# 🚀 Problem 3: Count Even Numbers in an Array

## 📝 Problem Statement  
Write a function that counts how many **odd numbers** are there in a given array.

### ✅ Example:
```js
Input: [1, 4, 6, 7, 9, 10]  
Output: 3  // (1, 7, 9 are even)
```

---

## 🔍 Step 1: Understand the Problem

### 🧾 Input:
- An array of numbers

### 📤 Output:
- A number: the count of odd elements in the array

---

## 🧱 Step 2: Plan the Logic (Pseudocode)

1. Initialize a counter to `0`
2. Loop through each element of the array
3. For each element:
   - If it’s a number AND not divisible by 2 → it's odd → increment counter
4. Return the counter

---

## 💻 Step 3: Basic JavaScript Code

```js
function countOddFromArray(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }

  return count;
}
```

---

## 🧪 Step 4: Test with Different Inputs

```js
countEvenNumbers([1, 2, 3, 4]);         // 2
countEvenNumbers([1, 3, 5, 7]);         // 4
countEvenNumbers([]);                  // 0
```

---

## ⚠️ Step 5: Handle Edge Cases Like a Pro

Let’s ask the right questions:

| Scenario                         | Expected Behavior             |
|----------------------------------|--------------------------------|
| arr is `null` or `undefined`     | Return 0 or throw error        |
| arr contains non-number values   | Ignore non-numbers             |
| arr is empty                     | Return 0                       |

### 🧠 Final Notes:
- You can use `typeof` to filter only numbers. But we are trying to convert the value to number and then we are checking for the presence of NaN, if found then we are skipping that value. This will consider the number provided as string.
- Edge case thinking = real dev mindset.

---

### 🔒 Final Version with Edge Case Handling:
[👉 View Final Code in `index.js`](./index.js)

```js
function countOddFromArray(arr) {
  if ( !Array.isArray(arr)) return 0

  let count = 0
  let arrLen = arr.length
  let num = 0

  for (let i = 0; i < arrLen; i += 1) {
    num = Number(arr[i])

    if (num !== num) continue

    if ( num % 2 !== 0) count += 1
  }

  return count
}
```

---

## 🎓 What I Learned

- 🧮 Odd numbers = divisible by 2 (`% 2 === 0`)
- 🔍 Input validation is critical in real-world apps
- ✅ Always test with both valid and invalid data
- 🧠 Simple logic → deep understanding when handled well
