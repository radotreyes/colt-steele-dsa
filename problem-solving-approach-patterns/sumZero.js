function sumZero(arr) {
  // select pointers to start at both ends of the array
  let p1 = 0
  let p2 = arr.length - 1
  while (p1 < p2) {
    const sum = arr[p1] + arr[p2]
    if (sum < 0) {
      // if we have a negative value, arr[p1] needs to be smaller
      p1 += 1
    } else if (sum === 0) {
      // if they add up to zero, we're done
      return [arr[p1], arr[p2]]
    } else {
      // otherwise, move the ending pointer
      p2 -= 1
    }
  }

  return undefined
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 10]))
console.log(sumZero([1, 2, 3]))
