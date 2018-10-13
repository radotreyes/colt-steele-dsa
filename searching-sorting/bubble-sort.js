function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    // grab the element
    // look ahead
    // swap if arr[i] > arr[i+1]
    // do it again for every element
    // NESTED LOOP BABY
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const helper = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = helper
      }
    }
  }
  return arr
}
