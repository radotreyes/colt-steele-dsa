# searching

## intro2searching

- sorting mostly happens with arrays
- with hash tables, we usually don't need to search
  - unless it's for values and we don't know the key, in which case... we're essentially searching through an array

## types of searches

### linear search

- the simplest, most intuitive search algorithm known to man
  - could be better, because it's always `O(n)` (binary search is `O(log n)`)

```js
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) return i
  }
  return -1
}
```

### binary search

- literally the best possible searching algorithm
  - only works on sorted datasets

```js
function binarySearch(arr, val) {
  let min = 0
  let max = arr.length - 1
  let middle = Math.floor((min + max) / 2)

  while (min <= max) {
    if (arr[middle] < val) {
      min = middle + 1
    } else if (arr[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }

    middle = Math.floor((min + max) / 2)
  }

  return -1
}
```

### searching through strings

- **how can we find a substring within a string?**
  - we could just go one at a time, then iterate through the substring as we find characters
