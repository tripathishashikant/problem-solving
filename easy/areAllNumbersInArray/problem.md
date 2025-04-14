# 🧠 Check if All Elements Are Numbers

## 📝 Problem Statement  
Write a function that checks whether all elements in a given array are numbers.

### ✅ Example:
```js
Input: [1, 4, 6, 7, 9, 10]  
Output: true
```

---

## 🔍 Step 1: Understand the Problem

### 🧾 Input:
- An array of numbers

### 📤 Output:
- **true** if every element is a number
- **false** if even one number is not a number

---

## 🧱 Step 2: Plan the Logic (Pseudocode)

1. Initialize a flag to `false`
2. Loop through each element of the array
3. For each element:
   - If it’s the type of number is not equal to *number* then return false
---

## ⚠️ Step 3: Handle Edge Cases Like a Pro

Let’s ask the right questions:

| Scenario                         | Expected Behavior             |
|----------------------------------|--------------------------------|
| arr is `null` or `undefined`     | Return false              |
| arr is not an array              | Return false              |
| arr contains non-number values   | Return false              |
| arr is empty                     | Return true               |
| arr has NaN / Infinity           | Return true (still numbers) |

### 🧠 Final Notes:
- typeof
- Array.isArray
- Array.prototype.every

---

### 🔒 Final Version with Edge Case Handling:
[👉 View Final Code in `index.js`](./index.js)

```js
function areAllNumbersInArray(arr) {
  if ( !Array.isArray(arr)) return false

  return arr.every((val) => typeof val === 'number')
}
```

---

## 🎓 What I Learned

- 🧮 Learned how `.every()` works for full-array validation
- 🔍 Realized the importance of input type-checking
- ✅ Understood how edge cases change the way I write code
- 🧠 Even simple problems have depth when approached thoughtfully
