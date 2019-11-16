function cal(arr1,arr2){
    let result = [];
    for(let i =0;i<arr1.length;i++)
    {
        result[i] = [ ];
        for(let j =0;j<arr2.length-1;j++)
        {
            result[i][j] = (arr1[i][j] + arr2[i][j])
        }
    }
    console.log(result)
}

cal([[1, 2],
    [3, 4],
    [5, 6]
  ] , [
    [1, 1],
    [1, 1],
    [1, 1]
  ])