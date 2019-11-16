let array =[1,2,3,4,5,6,7,8,10]
let sum=0

// for(let i=0;i<array.length;i++){
//     sum+=array[i];
// }
for(let number of array){
    if(number%2 !==0){
        sum+=number
    }
}
console.log(sum)


