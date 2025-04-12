# 🚀 Problem 2: Find Maximum Number

## 📝 Problem Statement  
Write a function that returns the **largest number** from an array.

### ✅ Example:
```js
Input: [7, 2, 10, 3, 1]  
Output: 10
```

---

## 🔍 Step 1: Understand the Problem

### 🧾 Input:
- An array of numbers (e.g., `[7, 2, 10, 3]`)

### 📤 Output:
- The largest number in the array

---

## 🧱 Step 2: Plan the Logic (Pseudocode)

1. Create a variable called `max` and set it to `-Infinity`.
2. Loop through each element in the array.
3. If current number is greater than `max`, update `max`.
4. Return the final value of `max`.

---

## 💻 Step 3: Basic JavaScript Code

```js
function findMax(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
```

---

## 🧪 Step 4: Test with Different Inputs

```js
findMax([1, 2, 3, 4]);     // 4
findMax([10]);             // 10
findMax([-5, -10, -2]);    // -2
findMax([]);               // -Infinity
```

---

## ⚠️ Step 5: Handle Edge Cases Like a Pro

Let’s analyze some corner cases:

| Scenario                    | Expected Behavior               |
|-----------------------------|----------------------------------|
| arr is `null` or `undefined` | Return `undefined` or throw error |
| arr contains non-numbers     | Ignore or throw error           |
| arr is empty                 | Return `undefined` or `-Infinity` |

### 🧠 Notes:
- `Math.max()` can help, but needs spread operator: `Math.max(...arr)`
- Watch out: `Math.max()` fails if array has non-numbers or is empty

### 🔒 Final Version with Edge Case Handling:
[👉 View Final Code in `index.js`](./index.js)

```js
function findMaxFromArray(arr) {
  if (!Array.isArray(arr))
    return undefined

  let max = -Infinity
  let arrLen = arr.length
  let num = -Infinity

  for(let i = 0; i < arrLen; i += 1) {
    num = Number(arr[i])

    if (num !== num) continue

    if ( num > max) max = num
  }

  return max === -Infinity ? undefined : max
}
```

### 🧪 Extra Test Cases

```js
findMax([1, 2, "a", null]);     // 2 (ignores invalid)
findMax([]);                   // undefined or custom message
findMax();                     // undefined or custom message
findMax(["hello", 1, 3]);      // 3
```

---

## 🎓 What I Learned

- 🧠 `-Infinity` is useful for initializing max comparisons.
- 🚫 `Math.max(...arr)` breaks on empty or invalid data.
- 🔍 Always validate your input before processing.
- 👀 Edge cases make you a better developer.
- 📈 This “simple” logic is often used in real-world algorithms.
