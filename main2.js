    const { Console } = require('console');
    var express = require('express')

    var app = express()

    app.get('/',(req,res)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>is Kha Banh Time </p><img src="https://znews-photo.zingcdn.me/w660/Uploaded/pwivovlb/2019_04_02/banh.jpg"><body><html>');
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