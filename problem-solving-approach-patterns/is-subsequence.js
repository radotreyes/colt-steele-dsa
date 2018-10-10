function isSubsequence(sub, str) {
  /**
   * @param     { string }  sub     the string whose characters are being recorded
   * @param     { string }  str     the string to be compared against
   * @return    { boolean }         whether or not all chars in `sub` appear in order in `str`
   */
  if (sub.length > str.length) return false

  function* getChar(string) {
    let i = 0
    while (i < string.length) {
      yield string[i]
      i += 1
    }
  }

  const gen = getChar(str)
  let next = gen.next().value
  for (const char of str) {
    if (char === next) {
      next = gen.next().value
    }

    if (!next) return true
  }

  return false
}
