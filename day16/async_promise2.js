let setTimeoutAndLog = function(input){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(input)
            resolve(input)
        },1000)
    })
}


setTimeoutAndLog("a").then(result =>{
    setTimeoutAndLog("b").then(result =>{
        setTimeoutAndLog("c").then(result =>{
            setTimeoutAndLog("d").then(result =>{
            })
        })
    })
 })

// setTimeoutAndLog("a")   //ออกพร้อมกัน
// .then(setTimeoutAndLog("b"))
// .then(setTimeoutAndLog("c"))
// .then(setTimeoutAndLog("d")) 
        