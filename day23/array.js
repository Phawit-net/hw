// array1 = [1, 2, 30, 400]
// let array2 = array1.map(x=>x*2)
// console.log(array2)

// array1 = [1, 2, 3, 4]
// let array2 = array1.map(x=>x.toString())
// console.log(array2)

// array1 = [1, "1", 2, {}]
// let array2 = array1.map(x=>typeof(x))
// console.log(array2)

// array1 = ["apple", "banana", "orange"]
// let array2 = array1.map(x=>x.toUpperCase(x))
// console.log(array2)

// array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ]
// let array2 = array1.map(x=>x.name)
// console.log(array2)

// array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ]
// let array2 = array1.map(x=>x.age)
// console.log(array2)

// array1 = [
//     { name: "apple", surname: "London" },
//     { name: "banana", surname: "Bangkok" },
//     { name: "watermelon", surname: "Singapore" },
//   ]
// let array2 = array1.map(x=>x.name +" "+x.surname)
// console.log(array2)

// array1 = [1,3,4,5,6,7,8]
// let array2 = array1.map(x=>x%2==0?"even":"odd")
// console.log(array2)

// array1 = [1, -3, 2, 8, -4, 5]
// let array2 = array1.map(x=>Math.abs(x))
// console.log(array2)

// array1 = [100, 200.25, 300.84, 400.3]
// let array2 = array1.map(x=>x.toFixed(2))
// console.log(array2)

// array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-01" },
//     { name: "watermelon", birth: "1985-12-01" },
//   ]
// let array2 = array1.map(x => {
//     return {...x , age : new Date().getFullYear() - new Date(x.birth).getFullYear()}
// })
// console.log(array2)

// array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-01" },
//     { name: "watermelon", birth: "1985-12-01" },
//   ]
// let array2 = array1.map(x => {
//     return "<tr> <td>"+x.name+"</td> <td>"+ new Date(x.birth).toDateString() + "</td></tr>"
// })
// console.log(array2)

