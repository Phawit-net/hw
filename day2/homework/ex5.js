arrays =[0,9,1,8,2,7,3,6,4,5];

for (let i=0;i<arrays.length;i++){
    for (let j=i+1;j<=arrays.length;j++)
    {
        if (arrays[i]>arrays[j])
        {
            let max = arrays[i];
            arrays[i] = arrays[j];
            arrays[j] = max;
        }
    }
}

console.log(arrays)