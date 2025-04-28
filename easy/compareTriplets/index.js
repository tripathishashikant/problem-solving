// basic one
function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }

  return [alice, bob];
}

// basic one with reduce
function compareTriplets(a, b) {
  return a.reduce((s, v, i) => [s[0] + (s > b[i]), s[1] + (s < b[i])], [0, 0])
}