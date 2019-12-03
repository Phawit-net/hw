function cal(arr)
{
    let max=0;
    for(let i =0;i<arr.length;i++)
    {
        if (arr[i]>max)
        {
            max = arr[i];
        }
    }
    console.log(max)
}
cal([36,2,6])