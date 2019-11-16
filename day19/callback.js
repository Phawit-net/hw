function map(array,callback){
    let result=[];

    for(let i =0;i<array.length;i++){
        let newValue = callback(array[i],i,array)
        result.push(newValue)
    }

    return result;
}

console.log(map([1,2,3,4,5], x=>x*2))
console.log(map([1,2,3,4,5], (x,indx)=> indx))
console.log(map([1,2,3,4,5], (x,indx,arr)=> arr))