/* eslint-disable no-use-before-define */
function mergesort(arr) {
  if (arr.length === 1) return arr

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return conquer(mergesort(left), mergesort(right))
}

function conquer(lower, upper) {
  const result = []
  let indexLower = 0
  let indexUpper = 0

  while (indexLower < lower.length && indexUpper < upper.length) {
    if (lower[indexLower] < upper[indexUpper]) {
      result.push(lower[indexLower])
      indexLower += 1
    } else {
      result.push(upper[indexUpper])
      indexUpper += 1
    }
  }

  return [...result, ...lower.slice(indexLower), ...upper.slice(indexUpper)]
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergesort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
