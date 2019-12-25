const findSecondMax = require("./eval")

test("find second max number should return correct result", () => {
    expect(() => { findSecondMax([])}).toThrow();
})

test("find second max number should return correct result", () => {
    expect(() => { findSecondMax([1])}).toThrow();
})

test("find second max number should return correct result", () => {
    expect(findSecondMax([10,22,13,4])).toBe(13);
})

test("find second max number should return correct result", () => {
    expect(findSecondMax([4,4,2,4,1])).toBe(2);
})

test("find second max number should return correct result", () => {
    expect(findSecondMax([1,1,2])).toBe(1);
})

test("find second max number should return correct result", () => {
    expect(() => findSecondMax([5,5,5,5,5])).toThrowError();
})
