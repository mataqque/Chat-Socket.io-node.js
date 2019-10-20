const express = require("express");
const app = express();
const http = require("http").Server(app);
const socket = require("socket.io")(http);
const port = process.env.PORT||3000;

http.listen(port,function(){
    console.log("Listen server:",port)
});

app.use(express.static(__dirname+"/public"))

app.get("/",function(req,res){
        res.sendFile(__dirname+"/public/index.html");
    });

socket.on("connection",function(io){
    io.on("send message",function(msg){
        console.log(msg)
        socket.emit("send message",msg);
    })
})