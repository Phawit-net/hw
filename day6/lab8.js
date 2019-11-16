function cal(arr,num)
{
    for(let i =0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]+arr[j] == num)
            {
                return true
            }
        }
    }
    return false 
}

console.log(cal([2,3,7,6],12))


// function cal2(arr,num)
// {
//     for(let i =0;i<arr.length;i++)
//     {
        
//     }
//     return false 
// }

// console.log(cal2([1,3,8,6],12))