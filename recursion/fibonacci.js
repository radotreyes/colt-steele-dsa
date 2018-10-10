function fib(n) {
  // edge case
  if (n < 0) return undefined

  // base cases
  if (!n) return 0
  if (n === 1) return 1

  return fib(n - 1) + fib(n - 2)
}
