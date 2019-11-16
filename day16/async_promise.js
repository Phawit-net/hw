let promise = new Promise(function(resolve,reject){  //ประกาศแบบนี้และเขียน function ไว้ข้างใน ตัวresolve,rejectจะถูกส่งไป
    setTimeout(() => resolve("done"),1000)
    //setTimeout(() => reject(new Error("Error!")),1000) //คืนerror กลับไปจะ return ที่.catch
})  
// เอาไปใช้ต่อโดย

// ex2
// let promise = new Promise(function(resolve,reject){  
//     let answer = true;
//     if(answer == true){
//         resolve("complete")
//     } else if(answer == false){
//         reject("Error 123")
//     }
// })  

promise.then((result) =>{   //ใส่อะไรไว้ใน resolve จะเป็น result ของ then
    //console.log(result)
    console.log("เรียบร้อย")
}).catch((err)=>{           //ใส่อะไรไว้ใน reject จะเป็น error ของ catch
    //console.log(err)
    console.log("มีข้อผิดพลาด")
})