function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  const frequencyCounter1 = {}
  const frequencyCounter2 = {}

  /* add values to each object in `O(n)` */
  arr1.forEach((val) => {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  })
  arr2.forEach((val) => {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 2
  })

  /* check each object in `O(n)` */
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false // check keys
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false // check values
  }

  /* do `O(n)` subroutine 4 times = `O(4n)` = `O(n)` */
  return true
}
