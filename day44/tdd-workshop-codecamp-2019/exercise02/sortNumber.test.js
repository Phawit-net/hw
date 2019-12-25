// 1. Implement Expect Function ✓ ✕ 
// 2. Implement Test Function
const sortNumber = require("../exercise01/sortNumber");

function isEqual(result, expected) {
  if (result[0] === expected[0] && result[1] === expected[1] && result[2] === expected[2]) {
    return true;
  }
  return false;
}

function test(title, callback) {      //เป็นตัวบอกว่าเรา test case ไหนอยู่ แล้ว เราexpect อะไรในtest case นั้น 
  try{
    callback();
    console.log(`✓ ${title} : Test Pass`)
  } catch(e){
    console.log(`✕ ${title} : ${e.message}`)
  }
}

function expect(actualResult) {
  return {
    toBe : function (expectedResult){
      if(!isEqual(actualResult , expectedResult)){
        throw new Error(`${actualResult} is not equal ${expectedResult}`)
      }
    }
  }
}

const expected = [1, 2, 3];

test("a > b > c", () => {
  expect(sortNumber(3, 2, 1)).toBe(expected);
});

test("b > a > c", () => {
  expect(sortNumber(2, 3, 1)).toBe(expected);
});

test("b > c > a", () => {
  expect(sortNumber(1, 3, 2)).toBe(expected);
});

test("a > c > b", () => {
  expect(sortNumber(3, 1, 2)).toBe(expected);
});

test("c > a > b", () => {
  expect(sortNumber(2, 1, 3)).toBe(expected);
});

test("c > b > a", () => {
  expect(sortNumber(1, 2, 3)).toBe(expected);
});

