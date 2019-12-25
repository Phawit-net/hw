function evaluate(expr) {
  expr = expr.split(" ");
  if (expr.length === 1){
    return parseInt(expr);
  } 

  let result = parseInt(expr[0]);
  for (let i= 1;i<expr.length;i=i+2)
  {
    if (expr[i] === "+") {
      result += parseInt(expr[i+1])
    } else {
      result -= parseInt(expr[i+1]) 
    }
  }
  return result;
}

module.exports = evaluate;