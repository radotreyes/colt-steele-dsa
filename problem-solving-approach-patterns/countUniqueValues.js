/* eslint-disable no-param-reassign */
function countUniqueValues(arr) {
  return arr.reduce(
    ({ unique, cache }, val) => {
      if (!cache[val]) {
        unique += 1
        cache[val] = 1
      }

      return { unique, cache }
    },
    { unique: 0, cache: {} },
  ).unique
}

console.group(`count unique`)
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2, 4, -1]))
console.groupEnd(`count unique`)

function lookaheadCount(arr) {
  // base case
  if (arr.length <= 1) return arr.length

  // look at two elements at a time, and increment a value when there's a difference
  let unique = 1 // by default, an array has at least one unique value
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] - arr[i - 1]) {
      unique += 1
    }
  }

  return unique
}

console.group(`lookahead count`)
console.log(lookaheadCount([-2, -1, -1, 0, 1])) // 4
console.log(lookaheadCount([1, 1, 1, 1, 1, 1, 2, 4])) // 3
console.groupEnd(`lookahead count`)
