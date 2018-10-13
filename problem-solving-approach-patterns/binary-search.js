/* eslint-disable consistent-return */
function binarySearch(arr, val) {
  let min = 0
  let max = arr.length - 1
  let middle = Math.floor((min + max) / 2)

  while (min <= max) {
    if (arr[middle] < val) {
      min = middle + 1
    } else if (arr[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }

    middle = Math.floor((min + max) / 2)
  }

  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4))
console.log(binarySearch([1, 2, 3, 4, 5, 6], 11))
