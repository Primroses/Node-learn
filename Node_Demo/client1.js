//客户端
var http = require('http')
var options ={
    hostname :"localhost",
    port :8080,
    path :'/',
    method :'POST'
}
var req = http.request(options,(res)=>{
    res.on('data',(chunk)=>{
        console.log(decodeURIComponent(chunk))
    })
});
req.write('你好')
req.end('再见')