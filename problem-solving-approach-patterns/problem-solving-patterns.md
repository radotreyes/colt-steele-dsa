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

#### my turn: write an anagram verification function

(see `anagram.js`)

### multiple pointers

- creating **pointers** that move towards the beginning, end, or middle, based on a certain condition.
- very efficient, minimal space cmplexity

#### implementation

- this is already implemented in doubly linked lists and trees:

```js
/* doubly linked list */
function ListNode(data) {
  this.data = data
  this.prev = null
  this.next = null
}

const rootNode = new ListNode(`i'm the root node`)
rootNode.next = new ListNode(`i'm the second node`)
rootNode.next.prev = rootNode
rootNode.next.next = new ListNode(`i'm the third node`)
rootNode.next.next.prev = rootNode.next.next

// to analyze this linked list, we can choose to insert pointers at the beginning (head) and end (tail) of the list, then move inwards.

// for a tree, we can choose to traverse breadth-first or depth-first, etc.
```

- **i did this to analyze that PBX stuff; i used two pointers which buffered array indices depending on what the data being observed was**

#### implementation challenge: sumZero

- **problem statement**: write a function which accepts a sorted array of integers. the function should find the first pair where the sum is zero.

```js
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
```

#### implementation challenge: countUniqueValues

- **problem statement**: implement a function which accepts a sorted array, then counts the unique values in the array

dirty cheater caching version:

```js
function countUniqueValues(arr) {
  /* O(n) runtime */
  return arr.reduce(
    // O(n)
    ({ unique, cache }, val) => {
      if (!cache[val]) {
        // O(1)
        unique += 1
        cache[val] = 1 // O(1)
      }

      return { unique, cache }
    },
    { unique: 0, cache: {} }
  ).unique
}
```

actually uses lookahead indexing version:

```js
function lookaheadCount(arr) {
  // base case
  if (arr.length <= 1) return arr.length

  // look at two elements at a time, and increment a value when there's a difference
  let unique = 1 // by default, an array has at least one unique value
  for (let i = 1; i < arr.length; i += 1) {
    // O(n)
    if (arr[i] - arr[i - 1]) {
      // O(1)
      unique += 1 // O(1)
    }
  }

  return unique
}
```
