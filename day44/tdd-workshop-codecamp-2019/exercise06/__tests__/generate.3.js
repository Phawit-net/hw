import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
// TODO: jest.spyOn, mockImplementation, check fn called 3 times, restore
  const spy = jest.spyOn(utils , 'fetchNumberFromAPI')  //จัดการ original function เก็บค่าให้  spy เหมือน jest.fn() เรียกใช้ tohavebeen ได้
  utils.fetchNumberFromAPI.mockImplementation( ()=> 10 );  //จำลอง function ขึ้นมา

  const expected = {min: 10, max: 10, avg: 10};

  const result = generateMinMaxAverage();
  expect(spy).toHaveBeenCalledTimes(3)
  expect(result).toEqual(expected);
  utils.fetchNumberFromAPI.mockRestore() //reset ค่าให้ function 
})