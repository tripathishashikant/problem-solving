# 🚀 Problem 3: Count Even Numbers in an Array

## 📝 Problem Statement  
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet `a = (a[0], a[1], a[2])`, and the rating for Bob's challenge is the triplet `b = (b[0], b[1], b[2])`.

The task is to calculate their comparison points by comparing each category:

If `a[i] > b[i]`, then Alice is awarded 1 point.
If `a[i] < b[i]`, then Bob is awarded 1 point.
If `a[i] = b[i]`, then neither person receives a point.

### ✅ Example:
```js
Input: [1, 4, 6, 7, 9, 10]  
Output: 3  // (4, 6, 10 are even)
```

---

## 🔍 Step 1: Understand the Problem

### 🧾 Input:
- Two array of numbers representing scores of each participants

### 📤 Output:
- An array of 2 position each storing the count of scores for each participants 

---

## 🧱 Step 2: Plan the Logic (Pseudocode)

1. Initialize an scores array having 2 position to `0`
2. Loop number of times the categories i.e., if 3 categories then 3 times 
3. For each element:
   - If a's score is greater then b's score, then increment scores[0]
   - If b's score is greater then a's score, then increment scores[1]
4. Return the counter

---

## 💻 Step 3: Basic JavaScript Code

```js
function compareTriplets(a, b) {
  let scores = [0, 0]

  for (let i = 0; i < 3; i += 1) {
    if (a[i] > b[i]) {
      scores[0]++
      continue
    }

    if (a[i] < b[i]) {
      scores[1]++
      continue
    }
  }

  return scores;
}

// using reduce method
function compareTriplets(a, b) {
  return a.reduce((s, v, i) => [s[0] + (s > b[i]), s[1] + (s < b[i])], [0, 0])
}
```

---

## 🧪 Step 4: Test with Different Inputs

```js
compareTriplets([1, 2, 3], [2, 1, 0]);       // [2, 1]
compareTriplets([0, 2, 4], [10, 1, 5]);      // [1, 2]
compareTriplets([1, 3, 5], [4, 3, 8]);       // [1, 1]
```

---

## ⚠️ Step 5: Handle Edge Cases Like a Pro

Let’s ask the right questions:

| Scenario                         | Expected Behavior            |
|----------------------------------|------------------------------|
| array is `null` or `undefined`   | Return undefined             |
| length of array is different     | Ignore the extra categories  |
| any array is empty               | Return [0, 0]                |
| any element is NaN               | Ignore that categories           |

### 🧠 Final Notes:
- Checking the NaN
- We can use `reduce` array method to efficiently solve the problem
- Edge case thinking = real dev mindset.

---

### 🔒 Final Version with Edge Case Handling:
[👉 View Final Code in `index.js`](./index.js)

```js
function countEvenFromArray(arr) {
  if ( !Array.isArray(arr)) return 0

  let count = 0
  let arrLen = arr.length
  let num = 0

  for (let i = 0; i < arrLen; i += 1) {
    num = Number(arr[i])

    if (num !== num) continue

    if ( num % 2 === 0) count += 1
  }

  return count
}
```

---

## 🎓 What I Learned

- 🧮 Even numbers = divisible by 2 (`% 2 === 0`)
- 🔍 Input validation is critical in real-world apps
- ✅ Always test with both valid and invalid data
- 🧠 Simple logic → deep understanding when handled well
