function cal(string){
    let ball=1;
    for(let i=0;i<string.length;i++)
    {
        if(string[i]=="A")
        {
            if (ball==1)
            {
                ball= ball+1
            }
            else if (ball==2)
            {
                ball= ball-1
            }
        }
        else if(string[i]=="B")
        {
            if (ball==2)
            {
                ball= ball+1
            }
            else if (ball==3)
            {
                ball= ball-1
            }
        }
        else if(string[i]=="C")
        {
            if (ball==1)
            {
                ball= ball+2
            }
            else if (ball==3)
            {
                ball= ball-2
            }
        }
    }
    console.log(ball)
}
cal("CABCCACB")