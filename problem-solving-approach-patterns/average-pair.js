function averagePair(arr, avg) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length <= 1) return false

  const len = arr.length - 1
  if (avg > arr[len] || avg < arr[0]) return false

  // get the target sum by multiply the average by two
  const target = avg * 2

  let first = 0
  let second = len
  while (second > first) {
    // stop when the two pointers overlap
    const sum = arr[first] + arr[second]
    if (sum > target) {
      // the sum is too big, decrease the larger number
      second -= 1
    } else if (sum < target) {
      // the sum is too small, increase the smaller number
      first += 1
    } else {
      return true
    }
  }

  return false
}
