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

console.log(sumArray([1, 2, 50, 3]))
console.log(sumArray([1, "a", "2", 5]))
console.log(sumArray([]))
console.log(sumArray(null))
console.log(sumArray(undefined))