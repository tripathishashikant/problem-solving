function areAllNumbersInArray(arr) {
  if ( !Array.isArray(arr)) return false

  return arr.every((val) => typeof val === 'number')
}

console.log(areAllNumbersInArray([1, 2, 3, 4]))
console.log(areAllNumbersInArray([1, "2", 3]))
console.log(areAllNumbersInArray([]))
console.log(areAllNumbersInArray(["a", 1, 2]))
console.log(areAllNumbersInArray([Infinity, NaN, 5]))
console.log(areAllNumbersInArray(null))