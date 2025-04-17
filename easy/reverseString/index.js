function reverseString(str) {
  if ( str === null || str === undefined ) return undefined
  if ( str.length === 0 ) return ''
  if (typeof str !== 'string') str = str.toString()

  return str.split('').reverse().join('')
}

console.log(reverseString('Hello World'))
console.log(reverseString(12345))
console.log(reverseString([]))
console.log(reverseString([Infinity, NaN, 5]))
console.log(reverseString(null))
console.log(reverseString(undefined))