import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
  // TODO: monkey-patching
  const originalFunction = utils.fetchNumberFromAPI; //เก็บ functionเก่าไว้ที่ originalFunction

  utils.fetchNumberFromAPI = () => 10;   //set ค่า returnค่าเป็น10 ให้ทุกตัว
  const expected = {min: 10, max: 10, avg: 10};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);

  utils.fetchNumberFromAPI = originalFunction; // reset ทำให้functionกลับไปเป็นค่าที่ random เหมือนเดิม
})