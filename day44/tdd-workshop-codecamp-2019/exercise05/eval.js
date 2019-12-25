function findSecondMax(expr) {
    let collapse = Array.from(new Set(expr))
    if (collapse.length >=2){
        let sortArr = collapse.sort(function(a,b){return a-b})
        return sortArr[collapse.length - 2]
    }
    else {
        throw new Error ("Cant find the number")
    }
}
  module.exports = findSecondMax;