array = [0,1,2,3,4,5,6,7,8,9,10];
let result = [];

for (let i =0;i<array.length;i++)
{
    if(array[i]%2!=0)
    {
        result.push(array[i]);
    }
}
console.log(result);