function flatten(arr) {
  function helper(member) {
    // base case
    if (typeof member !== `object`) return member
    return helper(member[0])
  }

  return arr.map(helper)
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
