function isPalindrome(string) {
  function reverse(str) {
    // edge case and base case
    if (!str.length || str.length === 1) return str

    return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
  }

  return string === reverse(string)
}
