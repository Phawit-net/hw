const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function change(x,num){
    let result =''
    for(let i in x)
    {
        for(let j=0;j<str.length;j++)
        {
            if(x[i]==str[j])
            {
                if(j+num > 25)
                {
                    result +=((str[(j+num) % 26]))
                }
                else{
                    result +=((str[j+num]))
                }
                continue
            }
        }
    }     
    return result
}
console.log(change("STUDENT",3))