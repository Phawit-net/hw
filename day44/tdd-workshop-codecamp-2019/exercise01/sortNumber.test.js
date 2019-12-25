// 1. Writing Tests
// 2. Implement Equal Function
// 3. Implement Code

const sortNumber = require("./sortNumber");

let result, expected;

// a > b > c
result = sortNumber(3, 2, 1);
expected = [1, 2, 3];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}

// a > c > b
result = sortNumber(6, 1, 4);
expected = [1, 4, 6];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
} 

// b > a > c
result = sortNumber(4, 5, 3);
expected = [3, 4, 5];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}

// b > c > a
result = sortNumber(2, 8, 6);
expected = [2, 6, 8];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}

// c > a > b
result = sortNumber(9, 3, 12);
expected = [3, 9, 12];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}

// c > b > a 
result = sortNumber(1, 5, 7);
expected = [1, 5, 7];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}

// a == b < c 
result = sortNumber(5, 5, 11);
expected = [5, 5, 11];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}

// a == b > c 
result = sortNumber(7, 7, 2);
expected = [2, 7, 7];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}

// b == c < a
result = sortNumber(10, 5, 5);
expected = [5, 5, 10];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}
// b == c > a 
result = sortNumber(6, 8, 8);
expected = [6, 8, 8];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}

// c == a < b
result = sortNumber(3, 1, 3);
expected = [1, 3, 3];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}

// c == a > b 
result = sortNumber(7, 1, 7);
expected = [1, 7, 7];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}

// a == b == c 
result = sortNumber(3, 3, 3);
expected = [3, 3, 3];
if (!(expected[0] === result[0] && expected[1] === result[1] && expected[2] === result[2])){
  throw new Error(`${result} is not equal to ${expected}`)
}
 
