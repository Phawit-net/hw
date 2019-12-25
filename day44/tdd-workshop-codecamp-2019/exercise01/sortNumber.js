function sortNumber(a, b, c) {
  // TODO: Implement Function
  var arr = [a,b,c]
  const arrSort = arr.sort(function(a, b){return a-b});
  return arrSort
}

module.exports = sortNumber;