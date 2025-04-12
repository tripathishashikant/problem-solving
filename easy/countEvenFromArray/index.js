function countEvenFromArray(arr) {
  if ( !Array.isArray(arr)) return 0

  let count = 0
  let arrLen = arr.length
  let num = 0

  for (let i = 0; i < arrLen; i += 1) {
    num = Number(arr[i])

    if (num !== num) continue

    if ( arr[i] % 2 === 0) count += 1
  }

  return count
}

console.log(countEvenFromArray([1, 2, 3, 4, 5, 6]))
console.log(countEvenFromArray([1, 2, 'ab', 4, '12', 6]))
console.log(countEvenFromArray(null))
console.log(countEvenFromArray(undefined))