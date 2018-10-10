function factorial(n) {
  // edge case
  if (n < 0) return undefined

  // base case
  if (n <= 2) return n
  let cur = n
  let next = n - 1

  while (next > 1) {
    // O(n)
    cur *= next
    next -= 1
  }

  return cur // O(n)
}
