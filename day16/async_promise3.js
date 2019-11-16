let promise = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve("a")
   }, 1000);
})
promise.then((x) => {
       console.log(x);
       return new Promise(function(resolve, reject) {
           setTimeout(() => {
               resolve('b');
           }, 1000)
       });
   })
   .then((x) => {
       console.log(x);
       return new Promise(function(resolve, reject) {
           setTimeout(() => {
               resolve('c');
           }, 1000)
       });
   })
   .then((x) => {
       console.log(x);
       return new Promise(function(resolve, reject) {
           setTimeout(() => {
               resolve('d');
           }, 1000)
       });
   })
   .then((x) => {
       console.log(x);
   })
   .catch((err) => {
       console.log(err);
   })