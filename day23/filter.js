// array1 = [1, 2, 30, 400] 
// let array2 = array1.filter(x=>x>10)
// console.log(array2)

// array1 = [1, 2, 3, 4]
// let array2 = array1.filter(x=>x%2!=0)
// console.log(array2)

// array1 = [1, "1", 2, {}] 
// let array2 = array1.filter(x=>typeof(x)=="number")
// console.log(array2)

// array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
// let array2 = array1.filter(x=>x.length>6)
// console.log(array2)

// array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ]
// let array2 = array1.filter(x=>x.age<18)
// console.log(array2)

// array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ]
// let array2 = array1.filter(x=>x.age!=32)
// console.log(array2)

// array1 = [1, -3, 2, 8, -4, 5]
// let array2 = array1.filter(x=>x>0)
// console.log(array2)

// array1 = [1,3,4,5,6,7,8]
// let array2 = array1.filter(x=>x%3==0)
// console.log(array2)

// array1 = ["peach", 1, -3, "2", {}, []]
// let array2 = array1.filter(x=>typeof(x)== "string")
// console.log(array2)

// array1 = ["APPLE", "appLE", "PEACH", "PEach"]
// let array2 = array1.filter(x=>x == x.toUpperCase())
// console.log(array2)

// array1 = [
//     { name: "apple", birth: "2001-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//     { name: "peach", birth: "2002-10-13" },
//   ]
// let array2 = array1.filter(x=> new Date(x.birth).getMonth()+1 == 10)
// console.log(array2)

// array1 = [
//         { name: "apple", birth: "2001-01-01" },
//         { name: "banana", birth: "1990-10-10" },
//         { name: "watermelon", birth: "1985-12-30" },
//         { name: "peach", birth: "2002-10-13" },
//       ]
// let array2 = array1.filter(x=> new Date(x.birth).getFullYear()<2000)
// console.log(array2)