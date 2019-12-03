function cal(arr){
    let sum=0
    let indx
    for(let i =0;i<arr.length;i++)
    {
        sum=sum+arr[i]
        if (arr[i]>max)
        {
            max = arr[i]
            indx = i+1
        }
    }
    console.log(sum,max,indx)
}
cal([3,6,4,2,1,5])