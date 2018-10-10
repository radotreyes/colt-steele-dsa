function factorial(n) {
  // edge case
  if (n < 0) return undefined
  if (n === 0) return 1

  // base case
  if (n <= 2) return n

  return n * factorial(n - 1) // O(n)
}
