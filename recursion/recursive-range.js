function recursiveRange(n) {
  // edge case
  if (n < 0) return undefined
  // base case
  if (n === 0) return n

  return n + recursiveRange(n - 1)
}
