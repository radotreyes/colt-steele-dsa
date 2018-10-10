function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  const first = String(num1)
  const second = String(num2)

  if (first.length !== second.length) return false

  const lookup = {}
  for (const digit of first) {
    lookup[digit] = (lookup[digit] || 0) + 1
  }

  for (const digit of second) {
    if (!lookup[digit]) return false
    lookup[digit] -= 1
  }

  return true
}
