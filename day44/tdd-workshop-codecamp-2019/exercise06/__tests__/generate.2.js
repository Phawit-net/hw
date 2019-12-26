import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
  // TODO: jest.fn(), mockReturnValueOnce
  const originalFunction = utils.fetchNumberFromAPI;
  utils.fetchNumberFromAPI = jest.fn();
  utils.fetchNumberFromAPI
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5)
    .mockReturnValueOnce(8)
  const expected = {min: 2, max: 8, avg: 5};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
  expect(utils.fetchNumberFromAPI).toHaveBeenCalledTimes(3)      // คาดหวังการทำงานของ code ว่าจะ call กี่รอบ
  utils.fetchNumberFromAPI = originalFunction;
})