async function work(){

var axios = require('axios')
var authorize = { Authorization: 'Bearer someToken' }
var response1 = await axios.get('https://reqres.in/api/users?page=2', {
    header: authorize
    })
var response2 = await axios.delete('https://reqres.in/api/users/2', {
    header: authorize
    } )

var response3 = await axios.put('https://reqres.in/api/users/2', {
    "name": "morpheus",
    "job": "zion resident"
    }, {
    header: authorize
    } )
console.log(response2)
}

new Promise(async(resolve)=>{
    resolve(await work())
}).then(()=>{
    console.log('Successful')
})