function power(base, exp) {
  // base cases
  if (exp === 1) return base
  if (exp === -1) return 1 / base
  if (!exp) return 1

  // if we are given a negative exponent, the rules are different
  const operation = exp < 0 ? (a, b) => b / a : (a, b) => a * b
  const trend = exp < 0 ? -1 : 1
  return operation(base, power(base, exp - trend))
}

console.log(power(2, 3))
console.log(power(2, 4))
console.log(power(2, -4))
console.log(power(2, -2))
console.log(power(2, 0))
console.log(power(-3, 2))
console.log(power(-2, 3))
