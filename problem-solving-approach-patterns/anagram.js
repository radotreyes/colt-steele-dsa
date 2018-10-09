/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

function isAnagram(str1, str2) {
  const obj1 = {}
  const obj2 = {}
  for (const char of str1) {
    obj1[char] = (obj1[char] || 0) + 1
  }
  for (const char of str2) {
    obj2[char] = (obj2[char] || 0) + 1
  }

  for (const key in obj1) {
    if (!(key in obj2)) return false
    if (obj1[key] !== obj2[key]) return false
  }

  return true
}

console.log(isAnagram(`asdf`, `fads`))
console.log(isAnagram(`aaz`, `zza`))
console.log(isAnagram(`texttwisttime`, `timetwisttext`))
