var express = require("express")
var app = express()

app.get('/plusByJSON', function(req, res, next) {
    let a = eval('(' + (req.query.jsonText) + ')')
    //let b = JSON.parse(a)
    res.send(String(a.a + a.b))
 })


app.listen(3000)
