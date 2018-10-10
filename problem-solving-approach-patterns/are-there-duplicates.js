function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  if (arguments.length <= 1) return false
  const lookup = {}

  for (let i = 0; i < arguments.length; i++) {
    lookup[arguments[i]] = (lookup[arguments[i]] || 0) + 1
  }

  for (const key in lookup) {
    if (lookup[key] > 1) return true
  }

  return false
}
