const http = require('http');
var server = http.createServer();
const EventEmitter = require('events');
// EventEmitter 类由 events 模块定义和开放的：



// 监听的是request 事件
server.on("request",(req,res)=>{
    console.log(req.url);
    res.end();
})
server.listen(8080)