const { Console } = require('console');
var express = require('express')

var app = express()

app.get('/',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><p> hehehehehe</p><body><html>');
    res.end();
})

app.get('/student',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><p> is student time </p><body><html>');
    res.end();
})

const PORT = 7000 || process.env.PORT
app.listen(PORT)
console.log("hehe");