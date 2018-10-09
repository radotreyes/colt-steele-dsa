/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

function isAnagram(str1, str2) {
  const lookupTable = {}

  // base case
  if (str1.length !== str2.length) return false

  // construct lookup table from str1
  for (const char of str1) {
    lookupTable[char] = (lookupTable[char] || 0) + 1
  }

  // look up if a char exists in the lookup table, and remove characters as we find them
  for (const char of str2) {
    if (!(char in lookupTable)) return false // check if char is in the lookup table
    if (lookupTable[char] <= 0) return false // if there are zero or negative instances of chars from str1 return false
    lookupTable[char] -= 1
  }

  return true
}

console.log(isAnagram(`asdf`, `fads`))
console.log(isAnagram(`aaz`, `zza`))
console.log(isAnagram(`texttwisttime`, `timetwisttext`))
