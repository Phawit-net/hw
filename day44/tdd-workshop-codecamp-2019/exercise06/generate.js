import {fetchNumberFromAPI} from './utils'

function generateMaxMinAverage() {
  const numbers = [
    fetchNumberFromAPI(),  //ยิง request 3ครั้งเก็บไว้ใน array ชื่อ numbers 
    fetchNumberFromAPI(),
    fetchNumberFromAPI(),
  ];
  const min = Math.min(...numbers);  
  const max = Math.max(...numbers);
  // const avg2 = ((number[0]+number[1]+number[2]) / 3)
  const avg = numbers.reduce((a, b) => a + b) / 3;

  return {min, max, avg};
}

export default generateMaxMinAverage;
