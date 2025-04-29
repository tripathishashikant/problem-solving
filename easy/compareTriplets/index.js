function compareTriplets(a, b) {
  if (!Array.isArray(a) || !Array.isArray(a)) return undefined
  
  let alice = 0
  let bob = 0
  let len = a.length > b.length ? b.length : a.length

  for (let i = 0; i < len; i++) {
      a[i] = Number(a[i])
      b[i] = Number(b[i])
      
      // NaN is the only value not equal to itself
      if (a[i] !== a[i] || b[i] !== b[i]) continue
      
      if (a[i] > b[i]) alice++
      
      if (a[i] < b[i]) bob++
  }

  return [alice, bob]
}