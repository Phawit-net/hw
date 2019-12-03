var express = require("express")

module.exports.getList = async function (req,res,next){

    var axios = require('axios')
    var authorize = { Authorization: 'Bearer someToken' }
    var response1 = await axios.get('https://reqres.in/api/users?page=1', {
        header: authorize
        })
    res.send(response1.data.data)
};

module.exports.postList= async function(req,res,next){

    var axios = require('axios')
    var authorize = { Authorization: 'Bearer someToken' }
    var response2 = await axios.post('https://reqres.in/api/users', {
    name: 'morpheus',
    job: 'leader'
    }, {
    header: authorize
    })
    res.send(response2.data)
};
    
// new Promise(async(resolve)=>{
//     resolve(await work())
// }).then(()=>{
//     console.log('Successful')
// })