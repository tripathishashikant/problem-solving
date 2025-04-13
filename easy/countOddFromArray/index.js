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

console.log(countOddFromArray([1, 4, 6, 7, 9, 10]))
console.log(countOddFromArray([]))
console.log(countOddFromArray(null))
console.log(countOddFromArray(['a', 3, 5, 8, {}]))
console.log(countOddFromArray([1, 2, 3, 4, 5]))