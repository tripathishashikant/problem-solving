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

console.log(findMaxFromArray([1, 45, 105, 10]))
console.log(findMaxFromArray([1, "a", null, 10]))
console.log(findMaxFromArray(undefined))
console.log(findMaxFromArray(null))
