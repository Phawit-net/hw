function cal(arr)
{
    let sum=0;
    for(let i =0;i<arr.length;i++)
    {
        sum = sum+arr[i];
    }
    let grade = sum >= 80 ? "A" :sum >= 75? "B+":sum >= 70?"B":sum >= 65?"C+":sum >= 60?"C":sum >= 55?"D+":sum >= 50?"D":"F";
    console.log(grade)
}
cal([25,15,10])