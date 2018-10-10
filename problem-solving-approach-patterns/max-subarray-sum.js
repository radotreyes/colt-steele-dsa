function maxSubarraySum(arr, size) {
  if (size > arr.length) return null
  let max = 0

  // calculate the initial sum
  for (let i = 0; i < size; i += 1) {
    // O(n)
    max += arr[i]
  }

  // sliding window
  // iterate over the whole array, removing the last element in the window
  // and adding in the next
  let windowSum = max
  for (let j = 0; j < arr.length - size; j += 1) {
    // O(n)
    // X_13 = X_13 - X1 + X4
    windowSum = windowSum - arr[j] + arr[j + size]
    max = Math.max(max, windowSum)
    console.log(windowSum)
  }

  return max // O(2n) ~== O(n)
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
