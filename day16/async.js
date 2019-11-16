// setTimeout(function(){
//     console.log("แสดงอันที่ 2 (หลังจากอันแรก 1 วินาที)");
// },1000);
// console.log("แสดงอันแรก")

setTimeout(function(){
    console.log("a");
    setTimeout(function(){
        console.log("b");
        setTimeout(function(){
            console.log("c");
            setTimeout(function(){
                console.log("d");
            },1000);
        },1000);
    },1000);
},1000);
