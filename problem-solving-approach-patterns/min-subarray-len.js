function minSubArrayLen(arr, sum) {
  // add whatever parameters you deem necessary - good luck!
  // edge cases
  if (!arr.length) return 0
  if (arr.length === 1 && sum >= arr[0]) return 1

  // start with the first two elements
  let lower = 0
  let upper = 1
  let windowLength = arr.length + 1
  let windowSum = arr[lower] + arr[upper]

  // if either of the two numbers is greater than the sum, return 1
  while (upper < arr.length) {
    // console.log(windowLength)
    if (windowSum >= sum) {
      windowLength =  Math.min(windowLength, upper - lower + 1) // record the minimum length

      windowSum -= arr[lower] // remove the lowest element
      lower += 1 // shrink from the window from the left
    } else {
      upper += 1
      windowSum += arr[upper]a
    }
  }

  return windowLength === arr.length + 1 ? 0 : windowLength
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
