function cal(arr)
{
    let max = arr[0];
    let min = arr[0];
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i]<min)
        {
            min = arr[i];
        }
        else if(arr[i]>max)
        {
            max = arr[i]
        }
    }
    console.log(min,max)
}
cal([4,1,-2,30,4,5])