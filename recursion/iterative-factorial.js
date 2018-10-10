function factorial(n) {
  // edge case
  if (n < 0) return undefined

  // base case
  if (n <= 2) return n

  let cur = n
  for (let i = n; i > 1; i -= 1) {
    cur *= i
  }

  return cur // O(n)
}
