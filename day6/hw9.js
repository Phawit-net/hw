function cal(arr1,str){
    let stack

    for(let i =0;i<arr1.length-1;i++)
    {
        if (arr1[i]>arr1[i+1])
        {
            stack = arr1[i+1]
            arr1[i+1] = arr1[i]
            arr1[i] = stack
        }
    }
    let min = arr1[0]
    let max = arr1[2]
    let mean = arr1[1]
    for(let j =0;j<str.length;j++)
    {
        if (str[j]=="A")
        {
            arr1[j]=min
        }
        else if(str[j]=="B")
        {
            arr1[j]=mean
        }
        else
        {
            arr1[j]=max
        }
    }
    console.log(arr1)
}
cal([1,22,40],"CAB")