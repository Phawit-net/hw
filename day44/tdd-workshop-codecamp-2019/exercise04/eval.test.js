// 1. TDD -> Write tests, Implement, Refactor
const evaluate = require("./eval")

// TODO: Write tests
test("single literal number should return that number", () => {
    expect(evaluate("1")).toBe(1);
})

test("a+b should return correct result (a,b < 10)", () => {
    expect(evaluate("1 + 1")).toBe(2);
})  

test("a-b should return correct result (a,b < 10)", () => {
    expect(evaluate("6 - 2")).toBe(4);
})  

test("a+b should return correct result (a,b >= 10)", () => {
    expect(evaluate("11 + 11")).toBe(22);
    expect(evaluate("54 + 13")).toBe(67);
})  

test("a-b should return correct result (a,b >= 10)", () => {
    expect(evaluate("66 - 12")).toBe(54);
})  

test("3 number sum  return correct result", () => {
    expect(evaluate("1 + 1 + 1")).toBe(3);
})  

test("4 number sum  return correct result", () => {
    expect(evaluate("1 - 2 + 3 - 4")).toBe(-2);
})  

test("n number sum  return correct result", () => {
    expect(evaluate("1 - 2 + 3 - 4 + 5 - 6 + 7")).toBe(4);
})  