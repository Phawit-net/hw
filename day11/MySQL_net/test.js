//ดึง database มาprint ที่terminal
var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Assasin14526',
    database:'boatrental',
})
con.connect() 
let query = "SELECT * FROM boats"
con.query(query, function (err, result) {
  console.log(result);
})

