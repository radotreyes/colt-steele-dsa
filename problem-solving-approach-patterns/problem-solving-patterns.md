# Problem Solving Patterns

## key steps to problem solving

1. understand the problem
2. explore and come up with examples
3. break it DOWN baby (talk!!!! talk to yourself, talk to your interviewer, talk to your dog, just talk)

- break it down into steps

4. solve in steps and simplify the problem
5. look back, reflect, refactor (TALK!!!!!)
6. talk no jutsu

## mastering common problem solving patterns

### frequency counter / accumulator / whatever

but how do we do this in `O(n)`?

#### problem statement

**write a function called `same`, which accepts two arrays. the function should return true if every value in the array has its corresponding value squared in the second array. the frequency of values must be the same.**

**"naive" solution**:

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i in arr1) {
    // `O(n)`
    const correctIndex = arr2.indexOf(arr1[i] ** 2) // `O(n) for every O(n)`
    if (correctIndex < 0) {
      return false
    }

    arr2.splice(correctindex, 1)
  }

  /* do `O(n)` subroutine `O(n)` times = `O(n^2)` */
  return true
}
```

1. basically, we're _removing_ elements from `arr2` which we are not iterating over every time we check an element in `arr1`
2. every time we iterate over the first (`O(n)`), we must iterate over the second (`O(n)`)
3. **this is `O(n^2)`**

**better solution**

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  /* add values to each object in `O(n)` */
  arr1.forEach(value => { frequencyCounter1[val] = (frequencyCounter1[val] || 0)+ 1})
  arr2.forEach(value => { frequencyCounter2[val] = (frequencyCounter2[val] || 0)+ 2})

  /* check each object in `O(n)` */
  for (let key in frequencyCounter1) {
    if !(key ** 2 in frequencyCounter2) return false // check keys
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false // check values
  }

  /* do `O(n)` subroutine 3 times = `O(3n)` = `O(n)` */
  return true
}
```
