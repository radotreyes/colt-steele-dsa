function productOfArray(arr) {
  // edge case
  if (!arr.length) return 0
  // base case
  if (arr.length === 1) return arr[0]

  return arr[0] * productOfArray(arr.slice(1))
}
