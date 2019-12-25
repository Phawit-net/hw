function search(arr, elem) {
  // TODO: Implement Code
  let count = 0;
  if (arr.length == 0) {
    return -1;
  } else {
    for (i of arr) {
      if (elem == i) {
        return count;
      } else if (count == arr.length - 1) {
        return -1;
      }
      count += 1;
    }
  }
}

module.exports = search;
