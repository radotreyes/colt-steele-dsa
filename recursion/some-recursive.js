function someRecursive(arr, callback) {
  // edge case
  if (!arr.length) return undefined

  function checkIndex(index) {
    // base cases
    if (index === arr.length) return false
    if (callback(arr[index])) return true
    return true && checkIndex(index + 1)
  }

  return checkIndex(0)
}

const isOdd = val => val % 2 !== 0

console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)) // false
