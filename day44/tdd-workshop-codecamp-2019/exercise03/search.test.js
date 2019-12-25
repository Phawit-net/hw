// 1. Design and Write Tests
// 2. Implement Function
const search = require("./search");

function test(title, callback) {
  try {
    callback();
    console.log(`${title}: ✓ test passed!`)
  } catch (e) {
    console.error(e)
    console.log(`${title}: ✕ test failed!`)
  }
}

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected)
        throw new Error(`${result} is not equal to ${expected}`)
    }
  }
}

// TODO: Write tests

test("successfully find index in array", () => {
  const inputArray = [5, 3, 1 ,4 ,6 ,20]
  const inputNumber = 1;
  const expectResult = 2;
  expect(search(inputArray, inputNumber)).toBe(expectResult);
});

test("can't found index in array", () => {
  const inputArray = [5, 3, 1 ,4 ,6 ,20]
  const inputNumber = 16;
  const expectResult = -1;
  expect(search(inputArray, inputNumber)).toBe(expectResult);
});

test("should return -1 when input array is empty", () => {
  const inputArray = []
  const inputNumber = 3;
  const expectResult = -1 ;
  expect(search(inputArray, inputNumber)).toBe(expectResult);
});

