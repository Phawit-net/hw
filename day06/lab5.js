function cal(num){
    let sum =''
    while(num>0){

        sum = (num%2) +sum
        num = Math.floor(num/2)
    }
    console.log(sum)
}
cal(4)

function invertcal(num){
    let sum =0
    for(let i=0;i<num.length;i++)
    {
        sum = (sum*2) + parseInt(num[i])
    }
    console.log(sum)
}
invertcal("10")